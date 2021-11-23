import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IPayload {
  id: number;
  correo: string;
  nombre: string;
  iat: number;
  exp: number;
}

export const validarJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay el token en la petición',
    });
  }

  try {
    const payload = jwt.verify(token, `${process.env.SECRETORPRIVATEKEY}`) as IPayload;
    
    req.userId = payload.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      ok: false,
      msg: `Acceso denegado, Token no válido`,
    });
  }
};
