"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
exports.Location = connection_1.default.define('provincias_cantones_parroquias_ec', {
    id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING },
    code: { type: sequelize_1.DataTypes.STRING },
    id_parent: { type: sequelize_1.DataTypes.STRING },
}, { freezeTableName: true });
exports.Location.belongsTo(exports.Location, { foreignKey: 'id_parent' });
exports.Location.hasMany(exports.Location, { foreignKey: 'id_parent' });
/*
id int AI PK
name varchar(100)
code varchar(6)
created_at timestamp
deleted_at timestamp
modified_at timestamp
created_by int
deleted_by int
modified_by int
id_parent int
*/
//# sourceMappingURL=location.js.map