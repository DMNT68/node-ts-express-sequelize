import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { Institution } from './institution';

export const Lotaip = db.define(
  'lotaip',
  {
    lotaip_id: { type: DataTypes.NUMBER, primaryKey: true },
    year: { type: DataTypes.NUMBER },
    month: { type: DataTypes.NUMBER },
    idInstitution: { type: DataTypes.NUMBER },
  },
  { freezeTableName: true }
);

Lotaip.belongsTo(Institution, { foreignKey: 'idInstitution' });
Institution.hasMany(Lotaip, { foreignKey: 'idInstitution' });

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
