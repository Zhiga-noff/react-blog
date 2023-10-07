import {
  authorization,
  fetchPost,
  fetchRoles,
  fetchUsers,
  logout,
  registration,
  removeUser,
  updateUserRole,
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
};
