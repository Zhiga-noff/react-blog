import { addComments, getComments, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const addPostComment = async (userSession, postId, userId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
  console.log(postId, userId, content, userSession);
  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: 'Доступ запрещен',
      response: null,
    };
  }

  await addComments(postId, userId, content);

  const post = await getPost(postId);

  const comments = await getComments(postId);

  return {
    error: null,
    response: { ...post, comments },
  };
};
