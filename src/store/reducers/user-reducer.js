import { ROLE } from '../../constants';
import { ACTION_TYPE } from '../actions';

const initialState = {
  id: null,
  login: null,
  roleId: ROLE.GUEST,
  session: null,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...payload,
      };
    case ACTION_TYPE.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
