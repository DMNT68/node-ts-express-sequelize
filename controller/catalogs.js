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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCatalogLotaip = exports.getLiteralesLotaip = exports.getCatalogByliteral = exports.getParroquiasByCanton = exports.getCantonesByProvincia = exports.getProvincias = exports.getinstitutions = exports.getRoles = void 0;
var role_1 = require("../models/role");
var institution_1 = require("../models/institution");
var location_1 = require("../models/location");
var sequelize_1 = require("sequelize");
var catalogLiteral_1 = require("../models/catalogLiteral");
var catalogLotaip_1 = require("../models/catalogLotaip");
var getRoles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var roles, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, role_1.Role.findAll({ where: { deleted_at: null } })];
            case 1:
                roles = _a.sent();
                if (!roles) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se encontro resultados',
                        })];
                }
                res.status(200).json({
                    ok: true,
                    roles: roles,
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log('---->', error_1);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getRoles = getRoles;
var getinstitutions = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var institutions, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, institution_1.Institution.findAll({ where: { deleted_at: null }, include: [location_1.Location] })];
            case 1:
                institutions = _a.sent();
                if (!institutions) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se encontro resultados',
                        })];
                }
                res.status(200).json({
                    ok: true,
                    institutions: institutions,
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log('---->', error_2);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getinstitutions = getinstitutions;
var getProvincias = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var provincias, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, location_1.Location.findAll({ where: { deleted_at: null, id_parent: null } })];
            case 1:
                provincias = _a.sent();
                if (!provincias || provincias.length <= 0) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se encontro resultados',
                        })];
                }
                res.status(200).json({
                    ok: true,
                    provincias: provincias,
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log('---->', error_3);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProvincias = getProvincias;
var getCantonesByProvincia = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idProvincia, provincia, cantones, error_4;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                idProvincia = req.body.idProvincia;
                _d.label = 1;
            case 1:
                _d.trys.push([1, 4, , 5]);
                return [4 /*yield*/, location_1.Location.findOne({ where: (_a = {}, _a[sequelize_1.Op.and] = [{ deleted_at: null }, { id: idProvincia }, { id: (_b = {}, _b[sequelize_1.Op.between] = [1, 25], _b) }], _a) })];
            case 2:
                provincia = _d.sent();
                if (!provincia) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'el id no pertenece a una provincia',
                        })];
                }
                return [4 /*yield*/, location_1.Location.findAll({ where: { deleted_at: null, id_parent: idProvincia, id: (_c = {}, _c[sequelize_1.Op.gt] = 25, _c) } })];
            case 3:
                cantones = _d.sent();
                if (!cantones || cantones.length <= 0) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se encontro resultados',
                        })];
                }
                res.status(200).json({
                    ok: true,
                    cantones: cantones,
                });
                return [3 /*break*/, 5];
            case 4:
                error_4 = _d.sent();
                console.log('---->', error_4);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getCantonesByProvincia = getCantonesByProvincia;
var getParroquiasByCanton = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idCanton, canton, parroquias, error_5;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                idCanton = req.body.idCanton;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                return [4 /*yield*/, location_1.Location.findOne({ where: (_a = {}, _a[sequelize_1.Op.and] = [{ deleted_at: null }, { id: idCanton }, { id_parent: (_b = {}, _b[sequelize_1.Op.between] = [1, 25], _b) }], _a) })];
            case 2:
                canton = _c.sent();
                if (!canton) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'el id no pertenece a un cantón',
                        })];
                }
                return [4 /*yield*/, location_1.Location.findAll({ where: { deleted_at: null, id_parent: idCanton } })];
            case 3:
                parroquias = _c.sent();
                if (!parroquias || parroquias.length <= 0) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se encontro resultados',
                        })];
                }
                res.status(200).json({
                    ok: true,
                    parroquias: parroquias,
                });
                return [3 /*break*/, 5];
            case 4:
                error_5 = _c.sent();
                console.log('---->', error_5);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getParroquiasByCanton = getParroquiasByCanton;
var getCatalogByliteral = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idCatalog, literal, catalogs, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idCatalog = req.body.idCatalog;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, catalogLotaip_1.CatalogLotaip.findOne({ where: { deleted_at: null, catalogLotaip_id: idCatalog } })];
            case 2:
                literal = _a.sent();
                if (!literal) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No existe ese catalogo',
                        })];
                }
                return [4 /*yield*/, catalogLiteral_1.CatalogLiteral.findAll({ where: { deleted_at: null, idCatalog: idCatalog }, include: [catalogLotaip_1.CatalogLotaip] })];
            case 3:
                catalogs = _a.sent();
                if (!catalogs || catalogs.length <= 0) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se encontro resultados',
                        })];
                }
                res.status(200).json({
                    ok: true,
                    catalogs: catalogs,
                });
                return [3 /*break*/, 5];
            case 4:
                error_6 = _a.sent();
                console.log('---->', error_6);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getCatalogByliteral = getCatalogByliteral;
var getLiteralesLotaip = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var catalogLotaip, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, catalogLotaip_1.CatalogLotaip.findAll({ where: { deleted_at: null } })];
            case 1:
                catalogLotaip = _a.sent();
                if (!catalogLotaip || catalogLotaip.length <= 0) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se encontro resultados',
                        })];
                }
                res.status(200).json({
                    ok: true,
                    catalogLotaip: catalogLotaip,
                });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.log('---->', error_7);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getLiteralesLotaip = getLiteralesLotaip;
var getCatalogLotaip = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var catalogLotaip, data, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, catalogLotaip_1.CatalogLotaip.findAll({ where: { deleted_at: null } })];
            case 1:
                catalogLotaip = _a.sent();
                if (!catalogLotaip || catalogLotaip.length <= 0) {
                    return [2 /*return*/, res.status(404).json({
                            ok: false,
                            msg: 'No se encontro resultados',
                        })];
                }
                return [4 /*yield*/, Promise.all(catalogLotaip.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
                        var catalog;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, catalogLiteral_1.CatalogLiteral.findAll({ raw: true, where: { deleted_at: null, idCatalog: item.getDataValue('catalogLotaip_id') }, attributes: ['catalogLiteral_id', 'title'] })];
                                case 1:
                                    catalog = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, item.get({ plain: true })), { puntos: catalog })];
                            }
                        });
                    }); }))];
            case 2:
                data = _a.sent();
                res.status(200).json({
                    ok: true,
                    data: data,
                });
                return [3 /*break*/, 4];
            case 3:
                error_8 = _a.sent();
                console.log('---->', error_8);
                res.status(500).json({
                    ok: false,
                    msg: "Ha ocurrido un error vuelva a intentarlo",
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getCatalogLotaip = getCatalogLotaip;
//# sourceMappingURL=catalogs.js.map