import { getUsers } from './get-users';

export const getUser = async (selectLogin) => {
  const users = await getUsers();
  return  users.find(({ login }) => login === selectLogin);
};
