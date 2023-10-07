import { setPostDataAction } from './set-post-data-action';

export const loadPostAsyncAction = (request, postId) => (dispatch) => {
  request('fetchPost', postId).then((postData) => {
    dispatch(setPostDataAction(postData));
  });
};
