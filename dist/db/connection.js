"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize('desarrollo_ecosRed', 'root', '@Mysql>1993<', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
exports.default = db;
//# sourceMappingURL=connection.js.map