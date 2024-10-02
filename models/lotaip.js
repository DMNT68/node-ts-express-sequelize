"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lotaip = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var institution_1 = require("./institution");
exports.Lotaip = connection_1.default.define('lotaip', {
    lotaip_id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true, autoIncrement: true },
    year: { type: sequelize_1.DataTypes.NUMBER },
    month: { type: sequelize_1.DataTypes.NUMBER },
    idInstitution: { type: sequelize_1.DataTypes.NUMBER },
}, { freezeTableName: true });
exports.Lotaip.belongsTo(institution_1.Institution, { foreignKey: 'idInstitution' });
institution_1.Institution.hasMany(exports.Lotaip, { foreignKey: 'idInstitution' });
// lotaip_id int AI PK
// year year
// month smallint
// created_at timestamp
// deleted_at timestamp
// modified_at timestamp
// created_by int
// deleted_by int
// modified_by int
// idInstitution int
//# sourceMappingURL=lotaip.js.map