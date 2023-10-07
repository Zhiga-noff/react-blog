export const getPost = async (id) => {
  return await fetch(`http://localhost:3005/posts/${id}`).then((loadedRoles) =>
    loadedRoles.json(),
  );
};
