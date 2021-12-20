"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailLotaip = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var lotaip_1 = require("./lotaip");
var catalogLotaip_1 = require("./catalogLotaip");
exports.DetailLotaip = connection_1.default.define('detail_lotaip', {
    detailLotaip_id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true, autoIncrement: true },
    idLotaip: { type: sequelize_1.DataTypes.NUMBER },
    idCatalogLotaip: { type: sequelize_1.DataTypes.NUMBER },
}, { freezeTableName: true });
exports.DetailLotaip.belongsTo(lotaip_1.Lotaip, { foreignKey: 'idLotaip' });
lotaip_1.Lotaip.hasMany(exports.DetailLotaip, { foreignKey: 'idLotaip' });
exports.DetailLotaip.belongsTo(catalogLotaip_1.CatalogLotaip, { foreignKey: 'idCatalogLotaip' });
catalogLotaip_1.CatalogLotaip.hasMany(exports.DetailLotaip, { foreignKey: 'idCatalogLotaip' });
// detailLotaip_id int AI PK
// created_at timestamp
// deleted_at timestamp
// modified_at timestamp
// created_by int
// deleted_by int
// modified_by int
// idLotaip int
// idCatalogLotaip int
//# sourceMappingURL=detailLotaip.js.map