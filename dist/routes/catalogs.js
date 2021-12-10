"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var catalogs_1 = require("../controller/catalogs");
var validar_jwt_1 = require("../middlewares/validar-jwt");
var validarAutorizacion_1 = require("../middlewares/validarAutorizacion");
var router = (0, express_1.Router)();
router.get('/roles', [validar_jwt_1.validarJWT, validarAutorizacion_1.validarAutorizacionAdmin], catalogs_1.getRoles);
router.get('/institutions', [validar_jwt_1.validarJWT], catalogs_1.getinstitutions);
router.get('/provincias', [validar_jwt_1.validarJWT], catalogs_1.getProvincias);
router.get('/cantonesByProvincia', [validar_jwt_1.validarJWT], catalogs_1.getCantonesByProvincia);
router.get('/parroquiasByCanton', [validar_jwt_1.validarJWT], catalogs_1.getParroquiasByCanton);
router.get('/catalogByliteral', [validar_jwt_1.validarJWT], catalogs_1.getCatalogByliteral);
router.get('/literalesLotaip', [validar_jwt_1.validarJWT], catalogs_1.getLiteralesLotaip);
router.get('/catalogLotaip', [validar_jwt_1.validarJWT], catalogs_1.getCatalogLotaip);
exports.default = router;
//# sourceMappingURL=catalogs.js.map