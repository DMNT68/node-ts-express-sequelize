import { Request, Response } from 'express';
import db from '../db/connection';
import Usuario from '../models/usuario';
import bcryptjs from 'bcryptjs';
import { generarJWT } from '../helpers/generarJWT';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({
      where: { email: email, estado: true },
      
    });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Email o password no son correctos',
      });
    }

    const validPassword = bcryptjs.compareSync(password, usuario.getDataValue('password'));

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Email o password no son correctos',
      });
    }

    const token = await generarJWT(usuario.getDataValue('id'), usuario.getDataValue('email'), usuario.getDataValue('nombre'));

    res.status(200).json({
      ok: true,
      msg: 'Usuario autenticado correctamente',
      usuario,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};
