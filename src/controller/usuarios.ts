import { Request, Response } from 'express';
import Usuario from '../models/usuario';
import db from '../db/connection';
import { encriptarPassword } from '../helpers/encriptarPassword';
import User from '../models/user';
import { Role } from '../models/role';
import { Institution } from '../models/institution';
import { Location } from '../models/location';
import sequelize from 'sequelize';

export const getUsuariosActivos = async (req: Request, res: Response) => {
  try {
    // const usuarios = await Usuario.findAll();
    // const usuarios = await db.query('CALL obtenerUsuarios(:estado)', { replacements: { estado: 1 } });
    const usuarios = await db.query('CALL getUsers()');

    res.status(200).json({
      ok: true,
      usuarios,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await User.findAll({
      where: { deleted_at: null },
      include: [Role, Institution, Location],
      attributes: ['users_id', 'user_name', 'name', 'lastname', 'phone', 'email'],
    });

    res.status(200).json({
      ok: true,
      usuarios,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuario = await User.findOne({
      where: { users_id: id, deleted_at: null },
      include: [Role, Institution, Location],
      attributes: ['users_id', 'user_name', 'name', 'lastname', 'phone', 'email', 'birth'],
      limit: 1,
    });

    if (usuario) {
      res.status(200).json({ ok: true, usuario });
    } else {
      res.status(400).json({
        msg: `no existe el usuario con el id ${id}`,
      });
    }
  } catch (error) {
    console.log('--->', error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  const { email, password, user_name, name, lastname, phone, birth, idInstitution, idLocation } = req.body;

  try {
    const usuario = User.build({ user_name, password: encriptarPassword(password), name, lastname, email, phone, birth, idInstitution, idLocation, created_by: req.userId });

    await usuario.save();

    res.status(200).json({
      ok: true,
      msg: 'usuario creado',
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, lastname, phone, birth, idInstitution, idLocation } = req.body;
  try {
    const usuario = await User.findByPk(id);

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: `No existe un usuarios con el id ${id}`,
      });
    }

    await usuario.update({ name, lastname, phone, birth, idInstitution, idLocation, modified_at: sequelize.fn('NOW'), modified_by: req.userId });

    res.status(200).json({
      ok: true,
      msg: 'usuario modificado',
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const putUsuarioRol = async (req: Request, res: Response) => {
  const { idUser, idRol } = req.body;

  try {
    const usuario = await User.findByPk(idUser);

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: `No existe un usuarios con el id ${idUser}`,
      });
    }

    await usuario.update({ idRol, modified_at: sequelize.fn('NOW'), modified_by: req.userId });

    res.status(200).json({
      ok: true,
      msg: 'Rol modificado',
      // usuario,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const usuario = await User.findByPk(id);

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: `No existe un usuarios con el id ${id}`,
      });
    }

    if (usuario.getDataValue('users_id') === req.userId) {
      return res.status(400).json({
        ok: false,
        msg: `El usuario no puede eliminarse a si mismo`,
      });
    }

    // await usuario.update({ estado: false });

    const resp = await db.query('CALL deleteUser(:idUser, :deletedBy)', { replacements: { idUser: usuario.getDataValue('users_id'), deletedBy: req.userId } });

    res.status(200).json({
      ok: true,
      msg: 'usuario borrado',
      resp,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};
