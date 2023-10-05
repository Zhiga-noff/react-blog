import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Content, H2 } from '../../components';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../hooks';
import { ROLE } from '../../constants';

const UsersContainer = ({ className }) => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const requestServer = useServerRequest('fetchRoles');

  useEffect(() => {
    Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
      ([usersRes, rolesRes]) => {
        if (usersRes.error || rolesRes.error) {
          setErrorMessage(usersRes.error || rolesRes.error);
          return;
        }

        setUsers(usersRes.response);
        setRoles(rolesRes.response);
      },
    );
  }, [requestServer]);

  return (
    <div className={className}>
      <Content error={errorMessage}>
        <H2>Пользователи</H2>
        <div>
          <TableRow>
            <div className={'login-column'}>Логин</div>
            <div className={'registered-at-column'}>Дата регистрации</div>
            <div className={'role-column'}>Роль</div>
          </TableRow>
          {users.map(({ id, login, registeredAt, roleId }) => (
            <UserRow
              key={id}
              roles={roles.filter(({ roleId }) => roleId !== ROLE.GUEST)}
              login={login}
              registeredAt={registeredAt}
              roleId={roleId}
            />
          ))}
        </div>
      </Content>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 570px;
  margin: 0 auto;

  font-size: 18px;
`;
