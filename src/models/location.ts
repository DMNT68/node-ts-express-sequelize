import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const Location = db.define(
  'provincias_cantones_parroquias_ec',
  {
    id: { type: DataTypes.NUMBER, primaryKey: true },
    name: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    id_parent: { type: DataTypes.STRING },
  },
  { freezeTableName: true }
);

Location.belongsTo(Location, { foreignKey: 'id_parent' });
Location.hasMany(Location, { foreignKey: 'id_parent' });

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
