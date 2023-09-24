import { generateDate } from './generate-date';

export const addUser = (login, password) => {
  return fetch('http://localhost3005/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      login: login,
      password: password,
      registered_at: generateDate(),
      role_id: 2,
    }),
  });
};
