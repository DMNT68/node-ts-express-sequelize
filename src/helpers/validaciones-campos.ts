import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';
import { emailExiste, existeUsuarioPorId, existeUserName, existePhone, esRolValido } from './db-validators';
import { validarJWT } from '../middlewares/validar-jwt';
import { validarAutorizacionAdmin } from '../middlewares/validarAutorizacion';

export const validarUsuario = [
  check('email', 'El correo no es válido').isEmail(),
  check('email').custom(emailExiste),
  check('password', 'El password debe de ser mas de 6 caracteres').isLength({ min: 6 }),
  check('name', 'El nombre tiene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
  check('name', 'El nombre invalido, es muy corto').isLength({ min: 2 }),
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('lastname', 'El apellido tiene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
  check('lastname', 'El apellido invalido, es muy corto').isLength({ min: 2 }),
  check('lastname', 'El apellido es obligatorio').not().isEmpty(),
  check('user_name', 'El nombre de usuario invalido, es muy corto').isLength({ min: 2 }),
  check('user_name', 'El nombre de usuario es obligatorio').not().isEmpty(),
  check('user_name').custom(existeUserName),
  check('phone', 'El número celular invalido, ingrese un numero correcto').isLength({ min: 10 }),
  check('phone', 'El número celular es obligatorio').not().isEmpty(),
  check('phone').custom(existePhone),
  check('birth', 'La fecha de nacimient invalida, ingrese un fecha correcta').isDate(),
  check('birth', 'La fecha de nacimiento es un campo obligatorio').not().isEmpty(),
  check('idInstitution', 'La institución no es correcta').isNumeric(),
  check('idInstitution', 'La institución es un campo obligatorio').not().isEmpty(),
  check('idLocation', 'La ubicación no es correcta').isNumeric(),
  check('idLocation', 'La ubicación es un campo obligatorio').not().isEmpty(),
  validarJWT,
  validarAutorizacionAdmin,
  validarCampos,
];

export const validarUsuarioPut = [
  check('name', 'El nombre tiene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
  check('name', 'El nombre invalido, es muy corto').isLength({ min: 2 }),
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('lastname', 'El apellido tiene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
  check('lastname', 'El apellido invalido, es muy corto').isLength({ min: 2 }),
  check('lastname', 'El apellido es obligatorio').not().isEmpty(),
  check('phone', 'El número celular invalido, ingrese un numero correcto').isLength({ min: 10 }),
  check('phone', 'El número celular es obligatorio').not().isEmpty(),
  check('birth', 'La fecha de nacimient invalida, ingrese un fecha correcta').isDate(),
  check('birth', 'La fecha de nacimiento es un campo obligatorio').not().isEmpty(),
  check('idInstitution', 'La institución no es correcta').isNumeric(),
  check('idInstitution', 'La institución es un campo obligatorio').not().isEmpty(),
  check('idLocation', 'La ubicación no es correcta').isNumeric(),
  check('idLocation', 'La ubicación es un campo obligatorio').not().isEmpty(),
  validarJWT,
  validarAutorizacionAdmin,
  validarCampos,
];

export const validarUsuarioPutRol = [
  check('idUser', 'El id usuario es obligatorio').not().isEmpty(),
  check('idUser').custom((idUser) => existeUsuarioPorId(idUser)),
  check('idRol', 'El id usuario es obligatorio').not().isEmpty(),
  check('idRol').custom((idRol) => esRolValido(idRol)),
  validarJWT,
  validarAutorizacionAdmin,
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
  validarAutorizacionAdmin,
  validarCampos,
];
