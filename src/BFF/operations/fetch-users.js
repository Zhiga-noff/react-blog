import { getUsers } from '../api';

export const fetchUsers = async (userSession) => {
  const users = await getUsers();

  return {
    error: null,
    response: users,
  };
};
