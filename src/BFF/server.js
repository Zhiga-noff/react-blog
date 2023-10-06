import {
  authorization,
  fetchRoles,
  logout,
  registration,
  fetchUsers,
  updateUserRole,
  removeUser,
} from './operations';

export const server = {
  logout,
  authorization,
  registration,
  fetchRoles,
  fetchUsers,
  updateUserRole,
  removeUser,
};
