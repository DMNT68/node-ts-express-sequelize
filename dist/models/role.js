"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
exports.Role = connection_1.default.define('roles', {
    roles_id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true },
    description: { type: sequelize_1.DataTypes.STRING },
});
/*
roles_id int AI PK
description varchar(45)
created_at timestamp
deleted_at timestamp
modified_at timestamp
created_by int
deleted_by int
modified_by int
 */ 
//# sourceMappingURL=role.js.map