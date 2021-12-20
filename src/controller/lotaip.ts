import { Request, Response } from 'express';
import { Op, where } from 'sequelize';
import User from '../models/user';
import { Institution } from '../models/institution';
import { Lotaip } from '../models/lotaip';
import { LotaipInterface } from '../interfaces/Ilotaitp';
import { DetailLotaip } from '../models/detailLotaip';
import { DocumentLotaip } from '../models/documentLotaip';

export const getLotaip = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      ok: true,
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

    // await lotaip.save();

    console.log(lotaip);
    console.log('-->', lotaip.get({ plain: true }));

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
