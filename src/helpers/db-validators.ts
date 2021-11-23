import Usuario from '../models/usuario';

export const emailExiste = async (email: string = '') => {
  const existeEmail = await Usuario.findOne({
    where: { email: email },
  });

  if (existeEmail) {
    throw new Error(`El correo: ${email} ya esta registrado`);
  }
};

export const existeUsuarioPorId = async (id: number) => {
  const existeUsuario = await Usuario.findOne({
    where: { id: id },
  });

  if (!existeUsuario) {
    throw new Error(`El usuarios no existe con este id: ${id}`);
  }
};

export const usuarioActivoToken = async (id: number) => {
  const usuarioActivo = await Usuario.findOne({
    where: { id: id, estado: 0 },
  });

  if (!usuarioActivo) {
    throw new Error(`El usuario no tiene permisos para hacer esta accion`);
  }
};
