import {
  authorization,
  fetchPost,
  fetchRoles,
  fetchUsers,
  logout,
  registration,
  removeUser,
  updateUserRole,
  addPostComment,
} from './operations';

export const server = {
  logout,
  authorization,
  registration,
  fetchRoles,
  fetchUsers,
  updateUserRole,
  removeUser,
  fetchPost,
  addPostComment,
};
