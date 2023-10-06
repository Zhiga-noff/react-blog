import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { deleteUser } from '../api';

export const removeUser = async (userSession, userId) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: 'Доступ запрещен',
      response: null,
    };
  }

  await deleteUser(userId);

  return {
    error: null,
    response: true,
  };
};
