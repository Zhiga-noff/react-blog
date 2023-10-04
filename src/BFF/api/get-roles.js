export const getRoles = async (selectLogin) => {
  return await fetch('http://localhost:3005/role').then((loadedRoles) =>
    loadedRoles.json(),
  );
};
