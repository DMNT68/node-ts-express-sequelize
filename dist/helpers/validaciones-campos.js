"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarDeleteUsuario = exports.validarLogin = exports.validarUsuarioPut = exports.validarUsuario = void 0;
var express_validator_1 = require("express-validator");
var validar_campos_1 = require("../middlewares/validar-campos");
var db_validators_1 = require("./db-validators");
var validar_jwt_1 = require("../middlewares/validar-jwt");
var validarAutorizacion_1 = require("../middlewares/validarAutorizacion");
exports.validarUsuario = [
    (0, express_validator_1.check)('email', 'El correo no es válido').isEmail(),
    (0, express_validator_1.check)('email').custom(db_validators_1.emailExiste),
    (0, express_validator_1.check)('password', 'El password debe de ser mas de 6 caracteres').isLength({ min: 6 }),
    (0, express_validator_1.check)('name', 'El nombre tiene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
    (0, express_validator_1.check)('name', 'El nombre invalido, es muy corto').isLength({ min: 2 }),
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('lastname', 'El apellido tiene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
    (0, express_validator_1.check)('lastname', 'El apellido invalido, es muy corto').isLength({ min: 2 }),
    (0, express_validator_1.check)('lastname', 'El apellido es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('user_name', 'El nombre de usuario invalido, es muy corto').isLength({ min: 2 }),
    (0, express_validator_1.check)('user_name', 'El nombre de usuario es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('phone', 'El número celular invalido, ingrese un numero correcto').isLength({ min: 10 }),
    (0, express_validator_1.check)('phone', 'El número celular es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('birth', 'La fecha de nacimient invalida, ingrese un fecha correcta').isDate(),
    (0, express_validator_1.check)('birth', 'La fecha de nacimiento es un campo obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idInstitution', 'La institución no es correcta').isNumeric(),
    (0, express_validator_1.check)('idInstitution', 'La institución es un campo obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idLocation', 'La ubicación no es correcta').isNumeric(),
    (0, express_validator_1.check)('idLocation', 'La ubicación es un campo obligatorio').not().isEmpty(),
    validar_jwt_1.validarJWT,
    validarAutorizacion_1.validarAutorizacionAdmin,
    validar_campos_1.validarCampos,
];
exports.validarUsuarioPut = [
    (0, express_validator_1.check)('name', 'El nombre tiene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
    (0, express_validator_1.check)('name', 'El nombre invalido, es muy corto').isLength({ min: 2 }),
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('lastname', 'El apellido tiene caracteres invalidos, solo letras').matches(/^[a-zA-Z\s]+$/i),
    (0, express_validator_1.check)('lastname', 'El apellido invalido, es muy corto').isLength({ min: 2 }),
    (0, express_validator_1.check)('lastname', 'El apellido es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('phone', 'El número celular invalido, ingrese un numero correcto').isLength({ min: 10 }),
    (0, express_validator_1.check)('phone', 'El número celular es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('birth', 'La fecha de nacimient invalida, ingrese un fecha correcta').isDate(),
    (0, express_validator_1.check)('birth', 'La fecha de nacimiento es un campo obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idInstitution', 'La institución no es correcta').isNumeric(),
    (0, express_validator_1.check)('idInstitution', 'La institución es un campo obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idLocation', 'La ubicación no es correcta').isNumeric(),
    (0, express_validator_1.check)('idLocation', 'La ubicación es un campo obligatorio').not().isEmpty(),
    validar_jwt_1.validarJWT,
    validarAutorizacion_1.validarAutorizacionAdmin,
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