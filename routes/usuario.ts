import { Router } from 'express';
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario, getUsuariosActivos } from '../controller/usuarios';

const router = Router();

router.get('/activos', getUsuariosActivos);

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

export default router;
