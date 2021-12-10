import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { CatalogLotaip } from './catalogLotaip';

export const CatalogLiteral = db.define(
  'catalog_literal',
  {
    catalogLiteral_id: { type: DataTypes.NUMBER, primaryKey: true },
    title: { type: DataTypes.STRING },
    idCatalog: { type: DataTypes.STRING },
   
  },
  { freezeTableName: true }
);

CatalogLiteral.belongsTo(CatalogLotaip, { foreignKey: 'idCatalog' });
CatalogLotaip.hasMany(CatalogLiteral, { foreignKey: 'idCatalog' });

// catalogLiteral_id int AI PK
// title varchar(100)
// created_at timestamp
// deleted_at timestamp
// modified_at timestamp
// created_by int
// deleted_by int
// modified_by int
// idCatalog int
