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
exports.esRolValido = exports.existeUsuarioPorId = exports.emailExiste = void 0;
var role_1 = require("../models/role");
var user_1 = __importDefault(require("../models/user"));
var emailExiste = function (email) {
    if (email === void 0) { email = ''; }
    return __awaiter(void 0, void 0, void 0, function () {
        var existeEmail;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.default.findOne({
                        where: { email: email },
                    })];
                case 1:
                    existeEmail = _a.sent();
                    if (existeEmail) {
                        throw new Error("El correo: " + email + " ya esta registrado");
                    }
                    return [2 /*return*/];
            }
        });
    });
};
exports.emailExiste = emailExiste;
var existeUsuarioPorId = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var existeUsuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1.default.findOne({
                    where: { users_id: id, deteled_at: null },
                })];
            case 1:
                existeUsuario = _a.sent();
                if (!existeUsuario) {
                    throw new Error("El usuarios no existe con este id: " + id);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.existeUsuarioPorId = existeUsuarioPorId;
var esRolValido = function (rol) { return __awaiter(void 0, void 0, void 0, function () {
    var existeRol;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, role_1.Role.findOne({ where: { role_id: rol, deleted_at: null } })];
            case 1:
                existeRol = _a.sent();
                if (!existeRol) {
                    throw new Error("El rol no existe");
                }
                return [2 /*return*/];
        }
    });
}); };
exports.esRolValido = esRolValido;
//# sourceMappingURL=db-validators.js.map