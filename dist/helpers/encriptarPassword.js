"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encriptarPassword = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var encriptarPassword = function (password) {
    var salt = bcryptjs_1.default.genSaltSync();
    return bcryptjs_1.default.hashSync(password, salt);
};
exports.encriptarPassword = encriptarPassword;
//# sourceMappingURL=encriptarPassword.js.map