export const getUsers = () =>
  fetch('http://localhost3005/users').then((loadedUsers) => loadedUsers.json());
