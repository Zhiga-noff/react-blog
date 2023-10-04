import { getUser } from '../api';
import { sessions } from '../sessions';

export const authorization = async (authLogin, authPassword) => {
  const user = await getUser(authLogin);
  if (!user) {
    return {
      error: 'Такой пользователь не найден',
      response: null,
    };
  }
  if (authPassword !== user.password) {
    return {
      error: 'Неверный пароль',
      response: null,
    };
  }

  return {
    error: null,
    response: {
      id: user.id,
      login: user.login,
      roleId: user.role_id,
      session: sessions.create(user),
    },
  };
};
