export const sever = {
  async authorization(authLogin, authPassword) {
    const users = await fetch('http://localhost3005/users').then((loadedUsers) =>
      loadedUsers.json(),
    );
    const user = users.find(({ login }) => login === authLogin);
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
    const session = {
      logout() {
        Object.keys(session).forEach((key) => {
          delete session[key];
        });
      },
      removeComment() {
        console.log('Удаление комментария');
      },
    };
    return {
      error: null,
      response: session,
    };
  },
};
