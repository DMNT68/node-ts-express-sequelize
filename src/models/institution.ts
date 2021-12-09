import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { Location } from './location';

export const Institution = db.define('institutions', {
  institution_id: { type: DataTypes.NUMBER, primaryKey: true },
  name: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  idLocation: { type: DataTypes.NUMBER },
});

Institution.belongsTo(Location, {foreignKey:'idLocation'})
Location.hasMany(Institution, { foreignKey: 'idLocation' });
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
