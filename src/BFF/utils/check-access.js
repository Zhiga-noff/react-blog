import { sessions } from '../sessions';

export const checkAccess = (userSession, accessRoles) => {
  const user = sessions.list[userSession];

  if (!user) {
    return false;
  }

  if (user.role_id === '') return true;
};
