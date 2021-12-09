import { Request, Response } from 'express';
import { Role } from '../models/role';
import { Institution } from '../models/institution';
import { Location } from '../models/location';
import { Op } from 'sequelize';

export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await Role.findAll({ where: { deleted_at: null } });

    if (!roles) {
      return res.status(404).json({
        ok: false,
        msg: 'No se encontro resultados',
      });
    }

    res.status(200).json({
      ok: true,
      roles,
    });
  } catch (error) {
    console.log('---->', error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const getinstitutions = async (req: Request, res: Response) => {
  try {
    const institutions = await Institution.findAll({ where: { deleted_at: null }, include: [Location] });

    if (!institutions) {
      return res.status(404).json({
        ok: false,
        msg: 'No se encontro resultados',
      });
    }

    res.status(200).json({
      ok: true,
      institutions,
    });
  } catch (error) {
    console.log('---->', error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const getProvincias = async (req: Request, res: Response) => {
  try {
    const provincias = await Location.findAll({ where: { deleted_at: null, id_parent: null } });

    if (!provincias || provincias.length <= 0) {
      return res.status(404).json({
        ok: false,
        msg: 'No se encontro resultados',
      });
    }

    res.status(200).json({
      ok: true,
      provincias,
    });
  } catch (error) {
    console.log('---->', error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const getCantonesByProvincia = async (req: Request, res: Response) => {
  const { idProvincia } = req.body;
  try {
    const provincia = await Location.findOne({ where: { [Op.and]: [{ deleted_at: null }, { id: idProvincia }, { id: { [Op.between]: [1, 25] } }] } });

    if (!provincia) {
      return res.status(404).json({
        ok: false,
        msg: 'el id no pertenece a una provincia',
      });
    }

    const cantones = await Location.findAll({ where: { deleted_at: null, id_parent: idProvincia, id: { [Op.gt]: 25 } } });

    if (!cantones || cantones.length <= 0) {
      return res.status(404).json({
        ok: false,
        msg: 'No se encontro resultados',
      });
    }

    res.status(200).json({
      ok: true,
      cantones,
    });
  } catch (error) {
    console.log('---->', error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};
export const getParroquiasByCanton = async (req: Request, res: Response) => {
  const { idCanton } = req.body;
  try {
    const canton = await Location.findOne({ where: { [Op.and]: [{ deleted_at: null }, { id: idCanton }, { id_parent: { [Op.between]: [1, 25] } }] } });

    if (!canton) {
      return res.status(404).json({
        ok: false,
        msg: 'el id no pertenece a un cantón',
      });
    }
    const parroquias = await Location.findAll({ where: { deleted_at: null, id_parent: idCanton } });

    if (!parroquias || parroquias.length <= 0) {
      return res.status(404).json({
        ok: false,
        msg: 'No se encontro resultados',
      });
    }

    res.status(200).json({
      ok: true,
      parroquias,
    });
  } catch (error) {
    console.log('---->', error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};
