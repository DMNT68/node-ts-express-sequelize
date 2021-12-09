import { Router } from 'express';
import { login } from '../controller/auth';
import { validarLogin } from '../helpers/validaciones-campos';

const router = Router();

router.post('/', validarLogin, login);

export default router;
