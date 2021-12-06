"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarDeleteUsuario = exports.validarLogin = exports.validarUsuario = void 0;
var express_validator_1 = require("express-validator");
var validar_campos_1 = require("../middlewares/validar-campos");
var db_validators_1 = require("./db-validators");
var validar_jwt_1 = require("../middlewares/validar-jwt");
var validarAutorizacion_1 = require("../middlewares/validarAutorizacion");
exports.validarUsuario = [
    (0, express_validator_1.check)('nombre', 'El nombre tinene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
    (0, express_validator_1.check)('nombre', 'El nombre invalido, es muy corto').isLength({ min: 2, max: 20 }),
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El correo no es válido').isEmail(),
    (0, express_validator_1.check)('email').custom(db_validators_1.emailExiste),
    (0, express_validator_1.check)('password', 'El password debe de ser mas de 6 caracteres').isLength({ min: 6 }),
    validar_campos_1.validarCampos,
];
exports.validarLogin = [
    (0, express_validator_1.check)('email', 'El correo no es válido').isEmail(),
    (0, express_validator_1.check)('email', 'Ingrese su email').isLength({ min: 1 }),
    (0, express_validator_1.check)('password', 'El password es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'Ingrese su password').isLength({ min: 1 }),
    validar_campos_1.validarCampos,
];
exports.validarDeleteUsuario = [
    (0, express_validator_1.check)('id', 'No es un id correcto').isNumeric(),
    (0, express_validator_1.check)('id', 'No existe un id').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeUsuarioPorId),
    validar_jwt_1.validarJWT,
    validarAutorizacion_1.validarAutorizacionAdmin,
    validar_campos_1.validarCampos,
];
//# sourceMappingURL=validaciones-campos.js.map