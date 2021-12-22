import { Request, Response } from 'express';
import { Op, where } from 'sequelize';
import User from '../models/user';
import { Institution } from '../models/institution';
import { Lotaip } from '../models/lotaip';
import { LotaipInterface } from '../interfaces/Ilotaitp';
import { DetailLotaip } from '../models/detailLotaip';
import { DocumentLotaip } from '../models/documentLotaip';
import { IDetailLotaip } from '../interfaces/IDetailLotaip';

export const getLotaip = async (req: Request, res: Response) => {
  try {
    const idInstitution = await User.findOne({ where: { users_id: req.userId, deleted_at: null }, attributes: ['idInstitution'] });

    if (!idInstitution) {
      return res.status(404).json({
        ok: false,
        msg: 'No se pudo encontrar la institución a la que pertenece el usuario',
      });
    }

    const insti = await Institution.findOne({ where: { institution_id: idInstitution.getDataValue('idInstitution'), deleted_at: null }, attributes: ['institution_id'] });

    if (!insti) {
      return res.status(404).json({
        ok: false,
        msg: 'La institucion no existe',
      });
    }

    const lotaipAll = await Lotaip.findAll({ where: { idInstitution: insti.getDataValue('institution_id'), deleted_at: null } });

    const data = await Promise.all(
      lotaipAll.map(async (item) => {
        const det = await DetailLotaip.findAll({ where: { deleted_at: null, idLotaip: item.getDataValue('lotaip_id') }, attributes: ['detailLotaip_id', 'idCatalogLotaip'] });

        const detail = await Promise.all(
          det.map(async (dt) => {
            const docs = await DocumentLotaip.findAll({
              raw: true,
              where: { deleted_at: null, idDetailLotaip: dt.getDataValue('detailLotaip_id'), idCatalogLiteral: dt.getDataValue('idCatalogLotaip') },
              attributes: ['document_id', 'title', 'url', 'file_name', 'extention', 'idDetailLotaip'],
            });

            return { ...dt.get({ plain: true }), docs };
          })
        );

        return { ...item.get({ plain: true }), detail };
      })
    );

    res.status(200).json({
      ok: true,
      data,
    });
  } catch (error) {
    console.log('---->', error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const insertLotaip = async (req: Request, res: Response) => {
  const { year, month, detailLotaip }: LotaipInterface = req.body;

  try {
    const idInstitution = await User.findOne({ where: { users_id: req.userId, deleted_at: null }, attributes: ['idInstitution'] });

    if (!idInstitution) {
      return res.status(404).json({
        ok: false,
        msg: 'No se pudo encontrar la institución a la que pertenece el usuario',
      });
    }

    const insti = await Institution.findOne({ where: { institution_id: idInstitution.getDataValue('idInstitution'), deleted_at: null }, attributes: ['institution_id'] });

    if (!insti) {
      return res.status(404).json({
        ok: false,
        msg: 'La institucion no existe',
      });
    }

    const validacion = await Lotaip.findOne({ where: { year, month, deleted_at: null }, attributes: ['lotaip_id'] });

    if (validacion) {
      return res.status(404).json({
        ok: false,
        msg: 'No pude repetir el mismo mes',
      });
    }
    const lotaip = await Lotaip.create({ year, month, idInstitution: insti.getDataValue('institution_id') });

    await Promise.all(
      detailLotaip.map(async (item) => {
        const dtLotaip = await DetailLotaip.build({ idLotaip: lotaip.getDataValue('lotaip_id'), idCatalogLotaip: item.idCatalogLotaip });

        await dtLotaip.save();

        await Promise.all(
          item.documentsDetail.map(async (doc) => {
            const docDet = await DocumentLotaip.build({
              title: doc.title,
              url: doc.url,
              file_name: doc.fileName,
              extention: doc.ext,
              idCatalogLiteral: item.idCatalogLotaip,
              idDetailLotaip: dtLotaip.getDataValue('detailLotaip_id'),
            });

            await docDet.save();
          })
        );
      })
    );

    res.status(200).json({
      ok: true,
      msg: 'Se guardo exitosamente',
    });
  } catch (error) {
    console.log('---->', error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};
