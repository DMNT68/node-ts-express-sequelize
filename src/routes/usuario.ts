import { Router } from 'express';
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario, getUsuariosActivos, putUsuarioRol } from '../controller/usuarios';
import { validarDeleteUsuario, validarUsuario, validarUsuarioPut, validarUsuarioPutRol } from '../helpers/validaciones-campos';
import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/activos', validarJWT, getUsuariosActivos);

router.get('/', validarJWT, getUsuarios);
router.get('/:id', validarJWT, getUsuario);
router.post('/', validarUsuario, postUsuario);
router.put('/:id', validarUsuarioPut, putUsuario);
router.put('/admin/changeRol', validarUsuarioPutRol, putUsuarioRol);
router.delete('/:id', validarDeleteUsuario, deleteUsuario);

export default router;
