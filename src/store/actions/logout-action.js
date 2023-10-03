import { ACTION_TYPE } from './action-type';
import { server } from '../../BFF';

export const logoutAction = (session) => {
  server.logout(session);

  return { type: ACTION_TYPE.LOGOUT };
};
