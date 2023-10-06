import { Icon } from '../../../../components';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TableRow } from '../table-row-styled/TableRow';
import { useState } from 'react';
import { useServerRequest } from '../../../../hooks';

const UserRowContainer = ({
  className,
  userId,
  roles,
  login,
  registeredAt,
  roleId: userRoleId,
  onUserDelete,
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
  const [initialRoleId, setInitialRoleId] = useState(userRoleId);
  const requestServer = useServerRequest();

  const dispatch = useDispatch();

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };

  const onRollSave = (userId, newUserRoleId) => {
    requestServer('updateUserRole', userId, newUserRoleId).then(() => {
      setInitialRoleId(newUserRoleId);
    });
  };

  const isSaveButtonDisabled = selectedRoleId === initialRoleId;

  return (
    <div className={className}>
      <TableRow border={true}>
        <div className={'login-column'}>{login}</div>
        <div className={'registered-at-column'}>{registeredAt}</div>
        <div className={'role-column'}>
          <select value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>
                {roleName}
              </option>
            ))}
          </select>
          {
            <div onClick={() => onRollSave(userId, selectedRoleId)}>
              <Icon
                id={'fa-floppy-o'}
                margin={'0 0 0 10px'}
                disabled={isSaveButtonDisabled}
              />
            </div>
          }
        </div>
      </TableRow>
      <div onClick={() => onUserDelete(userId)}>
        <Icon id={'fa-trash-o'} margin={'0 0 0 10px'} />
      </div>
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
  align-items: center;

  margin-top: 10px;

  & select {
    font-size: 16px;
  }
`;
