import { setPostDataAction } from './set-post-data-action';

export const loadPostAsyncAction = (request, postId) => (dispatch) => {
  request('fetchPost', postId).then((postData) => {
    console.log(postData.response);
    dispatch(setPostDataAction(postData.response));
  });
};
