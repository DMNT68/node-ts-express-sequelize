import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const CatalogLotaip = db.define(
  'catalog_lotaip',
  {
    catalogLotaip_id: { type: DataTypes.NUMBER, primaryKey: true },
    title: { type: DataTypes.STRING },
  },
  { freezeTableName: true }
);

// catalogLotaip_id int AI PK 
// title varchar(45) 
// created_at timestamp 
// deleted_at timestamp 
// modified_at timestamp 
// created_by int 
// deleted_by int 
// modified_by int
