"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../controller/auth");
var validaciones_campos_1 = require("../helpers/validaciones-campos");
var router = (0, express_1.Router)();
router.post('/', validaciones_campos_1.validarLogin, auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map