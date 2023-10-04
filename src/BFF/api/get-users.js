export const getUsers = async (selectLogin) => {
  return await fetch('http://localhost:3005/users').then((loadedUsers) =>
    loadedUsers.json(),
  );
};
