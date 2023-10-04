import { sessions } from '../sessions';
import { getRoles, getUser } from '../api';
import { ROLE } from '../constants';

export const fetchRoles = async (userSession) => {
  const accessRoles = [ROLE.ADMIN];

  if (!checkAccess(userSession, accessRoles)) {
    return {
      error: 'Доступ запрещен',
      response: null,
    };
  }

  const roles = await getRoles();

  return {
    error: null,
    response: roles,
  };
};
