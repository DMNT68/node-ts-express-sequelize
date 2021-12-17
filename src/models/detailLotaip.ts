import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { Lotaip } from './lotaip';
import { CatalogLotaip } from './catalogLotaip';

export const DetailLotaip = db.define(
  'detail_lotaip',
  {
    detailLotaip_id: { type: DataTypes.NUMBER, primaryKey: true },
    idLotaip: { type: DataTypes.NUMBER },
    idCatalogLotaip: { type: DataTypes.NUMBER },
  },
  { freezeTableName: true }
);

DetailLotaip.belongsTo(Lotaip, { foreignKey: 'idLotaip' });
Lotaip.hasMany(DetailLotaip, { foreignKey: 'idLotaip' });

DetailLotaip.belongsTo(CatalogLotaip, { foreignKey: 'idCatalogLotaip' });
CatalogLotaip.hasMany(DetailLotaip, { foreignKey: 'idCatalogLotaip' });

// detailLotaip_id int AI PK
// created_at timestamp
// deleted_at timestamp
// modified_at timestamp
// created_by int
// deleted_by int
// modified_by int
// idLotaip int
// idCatalogLotaip int
