import { Request, Response } from 'express';
import { Op } from 'sequelize';

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
  console.log('id-->', req.userId);
  console.log('body-->', req.body);

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
