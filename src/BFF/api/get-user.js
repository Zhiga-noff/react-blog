export const getUser = async (selectLogin) => {
  return fetch(`http://localhost:3005/users?login=${selectLogin}`)
    .then((loadedUser) => loadedUser.json())
    .then(
      ([loadedUser]) =>
        loadedUser && {
          id: loadedUser.id,
          login: loadedUser.login,
          password: loadedUser.password,
          registeredAt: loadedUser.registered_at,
          roleId: loadedUser.role_id,
        },
    );
};
