export const getRoles = async (selectLogin) => {
  return await fetch('http://localhost:3005/roles').then((loadedRoles) =>
    loadedRoles.json(),
  );
};
