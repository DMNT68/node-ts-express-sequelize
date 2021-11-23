import bcryptjs from 'bcryptjs';

export const encriptarPassword = (password: string): string => {
  const salt = bcryptjs.genSaltSync();

  return bcryptjs.hashSync(password, salt);
};
