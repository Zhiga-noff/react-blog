import { ACTION_TYPE } from './ACTION_TYPE';

export const setSessionAction = (session) => {
  return {
    type: ACTION_TYPE.SET_SESSION,
    payload: session,
  };
};
