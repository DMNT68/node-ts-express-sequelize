import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { Role } from './role';
import { Institution } from './institution';
import { Location } from './location';

const User = db.define('users', {
  users_id: { type: DataTypes.NUMBER, primaryKey: true },
  user_name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  birth: { type: DataTypes.DATE },
  idRol: { type: DataTypes.NUMBER },
  idInstitution: { type: DataTypes.NUMBER },
  idLocation: { type: DataTypes.NUMBER },
});

User.belongsTo(Role, { foreignKey: 'idRol' });
Role.hasMany(User, { foreignKey: 'idRol' });

User.belongsTo(Institution, {foreignKey:'idInstitution'})
Institution.hasMany(User, { foreignKey: 'idInstitution' });

User.belongsTo(Institution, {foreignKey:'idInstitution'})
Institution.hasMany(User, { foreignKey: 'idInstitution' });

User.belongsTo(Location, {foreignKey:'idLocation'})
Location.hasMany(User, { foreignKey: 'idLocation' });

export default User;
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
