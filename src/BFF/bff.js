import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session';

export const sever = {
  async authorization(authLogin, authPassword) {
    const user = getUser(authLogin);
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
      response: createSession(user.role_id),
    };
  },
  async registration(regLogin, regPassword) {
    const user = getUser(regLogin);
    if (user) {
      return {
        error: 'Такой логин уже занят',
        response: null,
      };
    }
    await addUser(regLogin, regPassword);
    return {
      error: null,
      response: createSession(user.role_id),
    };
  },
};
