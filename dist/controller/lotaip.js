"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.insertLotaip = exports.getLotaip = void 0;
var user_1 = __importDefault(require("../models/user"));
var institution_1 = require("../models/institution");
var lotaip_1 = require("../models/lotaip");
var detailLotaip_1 = require("../models/detailLotaip");
var documentLotaip_1 = require("../models/documentLotaip");
var getLotaip = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idInstitution, insti, lotaipAll, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, user_1.default.findOne({ where: { users_id: req.userId, deleted_at: null }, attributes: ['idInstitution'] })];
            case 1:
                idInstitution = _a.sent();
                if (!idInstitution) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se pudo encontrar la institución a la que pertenece el usuario',
                        })];
                }
                return [4 /*yield*/, institution_1.Institution.findOne({ where: { institution_id: idInstitution.getDataValue('idInstitution'), deleted_at: null }, attributes: ['institution_id'] })];
            case 2:
                insti = _a.sent();
                if (!insti) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'La institucion no existe',
                        })];
                }
                return [4 /*yield*/, lotaip_1.Lotaip.findAll({ where: { idInstitution: insti.getDataValue('institution_id'), deleted_at: null } })];
            case 3:
                lotaipAll = _a.sent();
                return [4 /*yield*/, Promise.all(lotaipAll.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
                        var det, detail;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, detailLotaip_1.DetailLotaip.findAll({ where: { deleted_at: null, idLotaip: item.getDataValue('lotaip_id') }, attributes: ['detailLotaip_id', 'idCatalogLotaip'] })];
                                case 1:
                                    det = _a.sent();
                                    return [4 /*yield*/, Promise.all(det.map(function (dt) { return __awaiter(void 0, void 0, void 0, function () {
                                            var docs;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, documentLotaip_1.DocumentLotaip.findAll({
                                                            raw: true,
                                                            where: { deleted_at: null, idDetailLotaip: dt.getDataValue('detailLotaip_id'), idCatalogLiteral: dt.getDataValue('idCatalogLotaip') },
                                                            attributes: ['document_id', 'title', 'url', 'file_name', 'extention', 'idDetailLotaip'],
                                                        })];
                                                    case 1:
                                                        docs = _a.sent();
                                                        return [2 /*return*/, __assign(__assign({}, dt.get({ plain: true })), { docs: docs })];
                                                }
                                            });
                                        }); }))];
                                case 2:
                                    detail = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, item.get({ plain: true })), { detail: detail })];
                            }
                        });
                    }); }))];
            case 4:
                data = _a.sent();
                res.status(200).json({
                    ok: true,
                    data: data,
                });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.log('---->', error_1);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getLotaip = getLotaip;
var insertLotaip = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, year, month, detailLotaip, idInstitution, insti, validacion, lotaip_2, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, year = _a.year, month = _a.month, detailLotaip = _a.detailLotaip;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                return [4 /*yield*/, user_1.default.findOne({ where: { users_id: req.userId, deleted_at: null }, attributes: ['idInstitution'] })];
            case 2:
                idInstitution = _b.sent();
                if (!idInstitution) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se pudo encontrar la institución a la que pertenece el usuario',
                        })];
                }
                return [4 /*yield*/, institution_1.Institution.findOne({ where: { institution_id: idInstitution.getDataValue('idInstitution'), deleted_at: null }, attributes: ['institution_id'] })];
            case 3:
                insti = _b.sent();
                if (!insti) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'La institucion no existe',
                        })];
                }
                return [4 /*yield*/, lotaip_1.Lotaip.findOne({ where: { year: year, month: month, deleted_at: null }, attributes: ['lotaip_id'] })];
            case 4:
                validacion = _b.sent();
                if (validacion) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No pude repetir el mismo mes',
                        })];
                }
                return [4 /*yield*/, lotaip_1.Lotaip.create({ year: year, month: month, idInstitution: insti.getDataValue('institution_id') })];
            case 5:
                lotaip_2 = _b.sent();
                return [4 /*yield*/, Promise.all(detailLotaip.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
                        var dtLotaip;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, detailLotaip_1.DetailLotaip.build({ idLotaip: lotaip_2.getDataValue('lotaip_id'), idCatalogLotaip: item.idCatalogLotaip })];
                                case 1:
                                    dtLotaip = _a.sent();
                                    return [4 /*yield*/, dtLotaip.save()];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, Promise.all(item.documentsDetail.map(function (doc) { return __awaiter(void 0, void 0, void 0, function () {
                                            var docDet;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, documentLotaip_1.DocumentLotaip.build({
                                                            title: doc.title,
                                                            url: doc.url,
                                                            file_name: doc.fileName,
                                                            extention: doc.ext,
                                                            idCatalogLiteral: item.idCatalogLotaip,
                                                            idDetailLotaip: dtLotaip.getDataValue('detailLotaip_id'),
                                                        })];
                                                    case 1:
                                                        docDet = _a.sent();
                                                        return [4 /*yield*/, docDet.save()];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }))];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 6:
                _b.sent();
                res.status(200).json({
                    ok: true,
                    msg: 'Se guardo exitosamente',
                });
                return [3 /*break*/, 8];
            case 7:
                error_2 = _b.sent();
                console.log('---->', error_2);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.insertLotaip = insertLotaip;
//# sourceMappingURL=lotaip.js.map