"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogLiteral = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var catalogLotaip_1 = require("./catalogLotaip");
exports.CatalogLiteral = connection_1.default.define('catalog_literal', {
    catalogLiteral_id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING },
    idCatalog: { type: sequelize_1.DataTypes.STRING },
}, { freezeTableName: true });
exports.CatalogLiteral.belongsTo(catalogLotaip_1.CatalogLotaip, { foreignKey: 'idCatalog' });
catalogLotaip_1.CatalogLotaip.hasMany(exports.CatalogLiteral, { foreignKey: 'idCatalog' });
// catalogLiteral_id int AI PK
// title varchar(100)
// created_at timestamp
// deleted_at timestamp
// modified_at timestamp
// created_by int
// deleted_by int
// modified_by int
// idCatalog int
//# sourceMappingURL=catalogLiteral.js.map