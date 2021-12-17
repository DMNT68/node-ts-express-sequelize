"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentLotaip = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var catalogLiteral_1 = require("./catalogLiteral");
var detailLotaip_1 = require("./detailLotaip");
exports.DocumentLotaip = connection_1.default.define('documents_detail', {
    document_id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING },
    url: { type: sequelize_1.DataTypes.STRING },
    file_name: { type: sequelize_1.DataTypes.STRING },
    extention: { type: sequelize_1.DataTypes.STRING },
    idCatalogLiteral: { type: sequelize_1.DataTypes.NUMBER },
    idDetailLotaip: { type: sequelize_1.DataTypes.NUMBER },
}, { freezeTableName: true });
exports.DocumentLotaip.belongsTo(catalogLiteral_1.CatalogLiteral, { foreignKey: 'idCatalogLiteral' });
catalogLiteral_1.CatalogLiteral.hasMany(exports.DocumentLotaip, { foreignKey: 'idCatalogLiteral' });
exports.DocumentLotaip.belongsTo(detailLotaip_1.DetailLotaip, { foreignKey: 'idDetailLotaip' });
detailLotaip_1.DetailLotaip.hasMany(exports.DocumentLotaip, { foreignKey: 'idDetailLotaip' });
// document_id int AI PK
// title varchar(255)
// url longtext
// file_name varchar(45)
// extention varchar(45)
// created_at timestamp
// deleted_at timestamp
// modified_at timestamp
// created_by int
// deleted_by int
// modified_by int
// idCatalogLiteral int
// idDetailLotaip int
//# sourceMappingURL=documentLotaip.js.map