"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var lotaip_1 = require("../controller/lotaip");
var validar_jwt_1 = require("../middlewares/validar-jwt");
var router = (0, express_1.Router)();
router.get('/', validar_jwt_1.validarJWT, lotaip_1.getLotaip);
router.post('/', validar_jwt_1.validarJWT, lotaip_1.insertLotaip);
exports.default = router;
//# sourceMappingURL=lotaip.js.map