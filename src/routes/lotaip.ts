import { Router } from 'express';
import { getLotaip, insertLotaip } from '../controller/lotaip';
import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/', validarJWT, getLotaip);
router.post('/', validarJWT, insertLotaip);

export default router;
