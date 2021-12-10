import { Router } from 'express';
import { getRoles, getinstitutions, getProvincias, getCantonesByProvincia, getParroquiasByCanton, getCatalogByliteral, getLiteralesLotaip, getCatalogLotaip } from '../controller/catalogs';
import { validarJWT } from '../middlewares/validar-jwt';
import { validarAutorizacionAdmin } from '../middlewares/validarAutorizacion';

const router = Router();

router.get('/roles', [validarJWT, validarAutorizacionAdmin], getRoles);
router.get('/institutions', [validarJWT], getinstitutions);
router.get('/provincias', [validarJWT], getProvincias);
router.get('/cantonesByProvincia', [validarJWT], getCantonesByProvincia);
router.get('/parroquiasByCanton', [validarJWT], getParroquiasByCanton);
router.get('/catalogByliteral', [validarJWT], getCatalogByliteral);
router.get('/literalesLotaip', [validarJWT], getLiteralesLotaip);
router.get('/catalogLotaip', [validarJWT], getCatalogLotaip);

export default router;
