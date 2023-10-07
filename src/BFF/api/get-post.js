import { transformPost } from '../transformers';

export const getPost = (id) => {
  return fetch(`http://localhost:3005/posts/${id}`)
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
};
