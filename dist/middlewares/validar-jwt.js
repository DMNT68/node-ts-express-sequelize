"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var validarJWT = function (req, res, next) {
    var token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay el token en la petición',
        });
    }
    try {
        var payload = jsonwebtoken_1.default.verify(token, "" + process.env.SECRETORPRIVATEKEY);
        req.userId = payload.id;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            ok: false,
            msg: 'Acceso denegado, Token no válido',
        });
    }
};
exports.validarJWT = validarJWT;
//# sourceMappingURL=validar-jwt.js.map