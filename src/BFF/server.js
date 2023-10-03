import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';

export const server = {
  async logout(session) {
    sessions.remove(session);
  },
  async authorization(authLogin, authPassword) {
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
  },
  async registration(regLogin, regPassword) {
    let existedUser = await getUser(regLogin);
    if (existedUser) {
      return {
        error: 'Такой логин уже занят',
        response: null,
      };
    }
    await addUser(regLogin, regPassword);
    const user = await getUser(regLogin);

    return {
      error: null,
      response: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    };
  },
};
