"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarios_1 = require("../controller/usuarios");
var validaciones_campos_1 = require("../helpers/validaciones-campos");
var validar_jwt_1 = require("../middlewares/validar-jwt");
var router = (0, express_1.Router)();
router.get('/activos', validar_jwt_1.validarJWT, usuarios_1.getUsuariosActivos);
router.get('/', validar_jwt_1.validarJWT, usuarios_1.getUsuarios);
router.get('/:id', validar_jwt_1.validarJWT, usuarios_1.getUsuario);
router.post('/', validaciones_campos_1.validarUsuario, usuarios_1.postUsuario);
router.put('/:id', validaciones_campos_1.validarUsuarioPut, usuarios_1.putUsuario);
router.put('/admin/changeRol', validaciones_campos_1.validarUsuarioPutRol, usuarios_1.putUsuarioRol);
router.delete('/:id', validaciones_campos_1.validarDeleteUsuario, usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map