import { getPost } from '../api';

export const fetchPost = async (id) => {
  const post = await getPost(id);
  return {
    error: null,
    response: post,
  };
};
