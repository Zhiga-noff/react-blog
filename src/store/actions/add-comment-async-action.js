import { setPostDataAction } from './set-post-data-action';

export const addCommentAsyncAction = (request, postId, userId, content) => (dispatch) => {
  request('addPostComment', postId, userId, content).then((postData) => {
    dispatch(setPostDataAction(postData.response));
  });
};
