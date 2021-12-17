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
export const existePhone = async (phone: string = '') => {
  const existePhone = await User.findOne({
    where: { phone: phone },
  });

  if (existePhone) {
    throw new Error(`El numero celular: ${phone} ya esta registrado`);
  }
};

export const existeUserName = async (userName: string = '') => {
  const existeUserName = await User.findOne({
    where: { user_name: userName },
  });

  if (existeUserName) {
    throw new Error(`El nombre de usuario: ${existeUserName} ya esta registrado`);
  }
};

export const existeUsuarioPorId = async (id: number) => {
  const existeUsuario = await User.findOne({
    where: { users_id: id, deleted_at: null },
  });

  if (!existeUsuario) {
    throw new Error(`El usuario no existe con este id: ${id}`);
  }
};

export const esRolValido = async (rol: number) => {
  const existeRol = await Role.findOne({ where: { roles_id: rol, deleted_at: null } });
  if (!existeRol) {
    throw new Error(`El rol no existe`);
  }
};
