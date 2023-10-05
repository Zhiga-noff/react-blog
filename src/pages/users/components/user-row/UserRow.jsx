import { Icon } from '../../../../components';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TableRow } from '../table-row-styled/TableRow';
import { useState } from 'react';

const UserRowContainer = ({
  className,
  roles,
  login,
  registeredAt,
  roleId: userRoleId,
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

  const dispatch = useDispatch();

  const isSaveButtonDisabled = Number(selectedRoleId) === userRoleId;
  console.log(typeof userRoleId);

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(target.value);
  };

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
            <Icon
              id={'fa-floppy-o'}
              margin={'0 0 0 10px'}
              disabled={isSaveButtonDisabled}
              onClick={() => dispatch(/*TODO*/)}
            />
          }
        </div>
      </TableRow>
      <Icon id={'fa-trash-o'} margin={'0 0 0 10px'} onClick={() => dispatch(/*TODO*/)} />
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
