import { NextFunction, Request, Response } from 'express';
import { Role } from '../models/role';
import User from '../models/user';

export const emailExiste = async (email: string = '') => {
  const existeEmail = await User.findOne({
    where: { email: email },
  });

  if (existeEmail) {
    throw new Error(`El correo: ${email} ya esta registrado`);
  }
};

export const existeUsuarioPorId = async (id: number) => {
  const existeUsuario = await User.findOne({
    where: { users_id: id, deteled_at: null },
  });

  if (!existeUsuario) {
    throw new Error(`El usuarios no existe con este id: ${id}`);
  }
};

export const esRolValido = async (rol: number) => {
  const existeRol = await Role.findOne({ where: { role_id: rol, deleted_at: null } });
  if (!existeRol) {
    throw new Error(`El rol no existe`);
  }
};
