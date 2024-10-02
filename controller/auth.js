"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrip = exports.login = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var generarJWT_1 = require("../helpers/generarJWT");
var user_1 = __importDefault(require("../models/user"));
var encriptarPassword_1 = require("../helpers/encriptarPassword");
var role_1 = require("../models/role");
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, usuario, validPassword, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                console.log(email);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, user_1.default.findOne({
                        where: { email: email, deleted_at: null },
                        include: {
                            model: role_1.Role,
                            attributes: ['description'],
                        },
                    })];
            case 2:
                usuario = _b.sent();
                if (!usuario) {
                    return [2 /*return*/, res.status(400).json({
                            ok: false,
                            msg: 'Email o password no son correctos',
                        })];
                }
                validPassword = bcryptjs_1.default.compareSync(password, usuario.getDataValue('password'));
                if (!validPassword) {
                    return [2 /*return*/, res.status(400).json({
                            ok: false,
                            msg: 'Email o password no son correctos',
                        })];
                }
                return [4 /*yield*/, (0, generarJWT_1.generarJWT)(usuario.getDataValue('users_id'), usuario.getDataValue('email'), usuario.getDataValue('name') + " " + usuario.getDataValue('lastname'))];
            case 3:
                token = _b.sent();
                res.status(200).json({
                    ok: true,
                    msg: 'Usuario autenticado correctamente',
                    usuario: { name: usuario.getDataValue('name'), lastname: usuario.getDataValue('lastname'), email: usuario.getDataValue('email'), phone: usuario.getDataValue('phone') },
                    token: token,
                });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.log('---->', error_1);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var encrip = function (req, res) {
    var password = req.body.password;
    res.status(200).json({
        ok: true,
        msg: (0, encriptarPassword_1.encriptarPassword)(password),
    });
};
exports.encrip = encrip;
//# sourceMappingURL=auth.js.map