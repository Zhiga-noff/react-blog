import { transormUser } from '../transformers';

export const getUser = async (selectLogin) => {
  return fetch(`http://localhost:3005/users?login=${selectLogin}`)
    .then((loadedUser) => loadedUser.json())
    .then(([loadedUser]) => loadedUser && transormUser(loadedUser));
};
