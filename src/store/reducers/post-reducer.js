import { ACTION_TYPE } from '../actions';

const initialState = {
  id: '',
  title: '',
  imageUrl: '',
  content: '',
  publishedAt: '',
  comments: [],
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.SET_POST_DATA:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
