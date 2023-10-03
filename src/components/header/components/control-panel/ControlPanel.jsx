import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ROLE } from '../../../../constants';
import {
  selectUserLogin,
  selectUserRole,
  selectUserSession,
} from '../../../../store/selectors';
import { logoutAction } from '../../../../store/actions';

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Pointer = styled.div`
  cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  const dispatch = useDispatch();

  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to={'/login'}>Войти</Link>
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>
            <Pointer onClick={() => dispatch(logoutAction(session))}>
              <Icon id={'fa-sign-out'} margin={'0px 0 0 10px'} />
            </Pointer>
          </>
        )}
      </RightAligned>
      <RightAligned>
        <Pointer onClick={() => navigate(-1)}>
          <Icon id={'fa-backward'} margin={'10px 0 0 0'} />
        </Pointer>
        <Link to={'/post'}>
          <Icon id={'fa-file-text-o'} margin={'10px 0 0 15px'} />
        </Link>
        <Link to={'/users'}>
          <Icon id={'fa-users'} margin={'10px 0 0 15px'} />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
