import { Router } from 'express';
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario, getUsuariosActivos } from '../controller/usuarios';
import { validarDeleteUsuario, validarUsuario, validarUsuarioPut } from '../helpers/validaciones-campos';
import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/activos', validarJWT, getUsuariosActivos);

router.get('/', validarJWT, getUsuarios);
router.get('/:id', validarJWT, getUsuario);
router.post('/', validarUsuario, postUsuario);
router.put('/:id', validarUsuarioPut, putUsuario);
router.delete('/:id', validarDeleteUsuario, deleteUsuario);

export default router;
