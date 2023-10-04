import React from 'react';
import styled from 'styled-components';
import { H2 } from '../../components';
import { TableRow, UserRow } from './components';
import { useDispatch } from 'react-redux';

const UsersContainer = ({ className }) => {
  const user = [];

  const dispatch = useDispatch();

  return (
    <div className={className}>
      <H2>Пользователи</H2>
      <div>
        <TableRow>
          <div className={'login-column'}>Логин</div>
          <div className={'registered-at-column'}>Дата регистрации</div>
          <div className={'role-column'}>Роль</div>
        </TableRow>
        {user.map(({ id, login, registeredAt, roleId }) => (
          <UserRow key={id} login={login} registeredAt={registeredAt} roleId={roleId} />
        ))}
      </div>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 570px;
  margin: 0 auto;
`;
