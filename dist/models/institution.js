"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var location_1 = require("./location");
exports.Institution = connection_1.default.define('institutions', {
    institution_id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING },
    address: { type: sequelize_1.DataTypes.STRING },
    idLocation: { type: sequelize_1.DataTypes.NUMBER },
});
exports.Institution.belongsTo(location_1.Location, { foreignKey: 'idLocation' });
location_1.Location.hasMany(exports.Institution, { foreignKey: 'idLocation' });
/*
institution_id int AI PK
name varchar(255)
address varchar(255)
created_at timestamp
deleted_at timestamp
modified_at timestamp
created_by int
deleted_by int
modified_by int
idLocation int
*/
//# sourceMappingURL=institution.js.map