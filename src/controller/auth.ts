import { Request, Response } from 'express';
import db from '../db/connection';
import Usuario from '../models/usuario';
import bcryptjs from 'bcryptjs';
import { generarJWT } from '../helpers/generarJWT';
import User from '../models/user';
import { encriptarPassword } from '../helpers/encriptarPassword';
import { Role } from '../models/role';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email);
  try {
    const usuario = await User.findOne({
      where: { email: email, deteled_at: null },
      include: {
        model: Role,
        attributes: ['description'],
      },
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

    const token = await generarJWT(usuario.getDataValue('users_id'), usuario.getDataValue('email'), `${usuario.getDataValue('name')} ${usuario.getDataValue('lastname')}`);

    res.status(200).json({
      ok: true,
      msg: 'Usuario autenticado correctamente',
      usuario: { name: usuario.getDataValue('name'), lastname: usuario.getDataValue('lastname'), email: usuario.getDataValue('email'), phone: usuario.getDataValue('phone') },
      token,
    });
  } catch (error) {
    console.log('---->', error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const encrip = (req: Request, res: Response) => {
  const { password } = req.body;
  res.status(200).json({
    ok: true,
    msg: encriptarPassword(password),
  });
};
