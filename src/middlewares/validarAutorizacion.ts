import { Response, NextFunction, Request } from 'express';
import User from '../models/user';

export const validarAutorizacionAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({
      where: { users_id: req.userId, deleted_at: null, idRol: 1 },
    });

    if (!user) {
      res.status(401).json({
        ok: false,
        msg: 'Acceso denegado, El usuario no tiene permisos para hacer esta acción',
      });
    }

    next();
  } catch (error) {
    res.status(401).json({
      ok: false,
      msg: 'Acceso denegado, El usuario no tiene permisos para hacer esta accion',
    });
  }
};
