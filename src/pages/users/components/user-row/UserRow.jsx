import { Icon } from '../../../../components';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TableRow } from '../table-row-styled/TableRow';

const UserRowContainer = ({
  className,
  roles,
  login,
  registeredAt,
  roleId: userRoleId,
}) => {
  const dispatch = useDispatch();

  const onRoleChange = () => {};

  return (
    <div className={className}>
      <TableRow>
        <div className={'login-column'}>{login}</div>
        <div className={'registered-at-column'}>{registeredAt}</div>
        <div className={'role-column'}>
          <select value={userRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option value={roleId}></option>
            ))}
          </select>
          <Icon
            id={'fa-floppy-o'}
            margin={'0 0 0 10px'}
            onClick={() => dispatch(/*TODO*/)}
          />
        </div>
      </TableRow>
      <Icon id={'fa-trash-o'} margin={'0 0 0 10px'} onClick={() => dispatch(/*TODO*/)} />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)``;
