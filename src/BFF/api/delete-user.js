export const deleteUser = async (userId) => {
  return fetch(`http://localhost:3005/users/${userId}`, {
    method: 'DELETE',
  }).then((createdUser) => createdUser.json());
};
