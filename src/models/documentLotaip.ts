import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { CatalogLiteral } from './catalogLiteral';
import { DetailLotaip } from './detailLotaip';

export const DocumentLotaip = db.define(
  'documents_detail',
  {
    document_id: { type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    url: { type: DataTypes.STRING },
    file_name: { type: DataTypes.STRING },
    extention: { type: DataTypes.STRING },
    idCatalogLiteral: { type: DataTypes.NUMBER },
    idDetailLotaip: { type: DataTypes.NUMBER },
  },
  { freezeTableName: true }
);

DocumentLotaip.belongsTo(CatalogLiteral, { foreignKey: 'idCatalogLiteral' });
CatalogLiteral.hasMany(DocumentLotaip, { foreignKey: 'idCatalogLiteral' });

DocumentLotaip.belongsTo(DetailLotaip, { foreignKey: 'idDetailLotaip' });
DetailLotaip.hasMany(DocumentLotaip, { foreignKey: 'idDetailLotaip' });

// document_id int AI PK
// title varchar(255)
// url longtext
// file_name varchar(45)
// extention varchar(45)
// created_at timestamp
// deleted_at timestamp
// modified_at timestamp
// created_by int
// deleted_by int
// modified_by int
// idCatalogLiteral int
// idDetailLotaip int
