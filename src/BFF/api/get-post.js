export const getRoles = async (selectLogin) => {
  return await fetch(`http://localhost:3005/posts/${id}`).then((loadedRoles) =>
    loadedRoles.json(),
  );
};
