"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var role_1 = require("./role");
var institution_1 = require("./institution");
var location_1 = require("./location");
var User = connection_1.default.define('users', {
    users_id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true },
    user_name: { type: sequelize_1.DataTypes.STRING },
    password: { type: sequelize_1.DataTypes.STRING },
    name: { type: sequelize_1.DataTypes.STRING },
    lastname: { type: sequelize_1.DataTypes.STRING },
    email: { type: sequelize_1.DataTypes.STRING },
    phone: { type: sequelize_1.DataTypes.STRING },
    birth: { type: sequelize_1.DataTypes.DATE },
    idRol: { type: sequelize_1.DataTypes.NUMBER },
    idInstitution: { type: sequelize_1.DataTypes.NUMBER },
    idLocation: { type: sequelize_1.DataTypes.NUMBER },
});
User.belongsTo(role_1.Role, { foreignKey: 'idRol' });
role_1.Role.hasMany(User, { foreignKey: 'idRol' });
User.belongsTo(institution_1.Institution, { foreignKey: 'idInstitution' });
institution_1.Institution.hasMany(User, { foreignKey: 'idInstitution' });
User.belongsTo(institution_1.Institution, { foreignKey: 'idInstitution' });
institution_1.Institution.hasMany(User, { foreignKey: 'idInstitution' });
User.belongsTo(location_1.Location, { foreignKey: 'idLocation' });
location_1.Location.hasMany(User, { foreignKey: 'idLocation' });
exports.default = User;
/*
users_id int AI PK
user_name varchar(20)
password varchar(255)
name varchar(200)
lastname varchar(200)
email varchar(200)
phone varchar(10)
birth date
created_at timestamp
deteled_at timestamp
modified_at timestamp
created_by int
deleted_by int
modified_by int
idRol int
idInstitution int
idLocation int
 */
//# sourceMappingURL=user.js.map