import { Router } from 'express';
import { check } from 'express-validator';
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario, getUsuariosActivos } from '../controller/usuarios';
import { validarDeleteUsuario, validarUsuario } from '../helpers/validaciones-campos';
import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/activos', validarJWT, getUsuariosActivos);

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', validarUsuario, postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', validarDeleteUsuario, deleteUsuario);

export default router;
