import { Request, Response } from 'express';
import Usuario from '../models/usuario';
import db from '../db/connection';
import { encriptarPassword } from '../helpers/encriptarPassword';
import { usuarioActivoToken } from '../helpers/db-validators';

export const getUsuariosActivos = async (req: Request, res: Response) => {
  try {
    // const usuarios = await Usuario.findAll();
    // const usuarios = await db.query('CALL obtenerUsuarios(:estado)', { replacements: { estado: 1 } });
    const usuarios = await db.query('CALL obtenerUsuarios()');

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
    const usuarios = await Usuario.findAll();
    res.status(200).json({
      ok: true,
      usuarios,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      res.status(200).json({ ok: true, usuario });
    } else {
      res.status(400).json({
        msg: `no existe el usuario con el id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  const { nombre, email, password } = req.body;

  try {
    const usuario = Usuario.build({ nombre, email, password: encriptarPassword(password) });

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
  const { body } = req;
  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: `No existe un usuarios con el id ${id}`,
      });
    }

    await usuario.update(body);

    res.status(200).json({
      ok: true,
      msg: 'usuario modificado',
      usuario,
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
    const usuarioActivo = await usuarioActivoToken(req.userId);
    
    const usuario = await Usuario.findByPk(id);

    // await usuario.update({ estado: false });

    res.status(200).json({
      ok: true,
      msg: 'usuario borrado',
      usuario,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  }
};
