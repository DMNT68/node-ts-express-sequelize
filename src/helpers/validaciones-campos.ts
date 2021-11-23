import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';
import { emailExiste, existeUsuarioPorId } from './db-validators';
import { validarJWT } from '../middlewares/validar-jwt';

export const validarUsuario = [
  check('nombre', 'El nombre tinene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
  check('nombre', 'El nombre invalido, es muy corto').isLength({ min: 2, max: 20 }),
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El correo no es válido').isEmail(),
  check('email').custom(emailExiste),
  check('password', 'El password debe de ser mas de 6 caracteres').isLength({ min: 6 }),
  validarCampos,
];

export const validarLogin = [
  check('email', 'El correo no es válido').isEmail(),
  check('email', 'Ingrese su email').isLength({ min: 1 }),
  check('password', 'El password es obligatorio').not().isEmpty(),
  check('password', 'Ingrese su password').isLength({ min: 1 }),
  validarCampos,
];

export const validarDeleteUsuario = [
  check('id', 'No es un id correcto').isNumeric(),
  check('id', 'No existe un id').not().isEmpty(),
  check('id').custom(existeUsuarioPorId),
  validarJWT,
  validarCampos,
];
