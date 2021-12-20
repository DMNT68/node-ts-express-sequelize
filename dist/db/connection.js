"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize('fcpcutnc_ecosred', // fcpcutnc_ecosred // desarrollo_ecosred
'fcpcutnc_Atest', // fcpcutnc_Atest  root
'sw0ufsUTs=Nc' // sw0ufsUTs=Nc  @Mysql>1993<
, {
    host: '168.119.13.153',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
exports.default = db;
//# sourceMappingURL=connection.js.map