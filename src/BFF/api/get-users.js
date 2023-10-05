import { transormUser } from '../transformers';

export const getUsers = async () => {
  return await fetch('http://localhost:3005/users')
    .then((loadedUsers) => loadedUsers.json())
    .then((loadedUsers) => loadedUsers && loadedUsers.map(transormUser));
};
