import {
  authorization,
  fetchRoles,
  logout,
  registration,
  fetchUsers,
} from './operations';

export const server = {
  logout,
  authorization,
  registration,
  fetchRoles,
  fetchUsers,
};
