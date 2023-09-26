import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';
import { Link, useNavigate } from 'react-router-dom';

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  width: 100px;
  height: 32px;

  border: 1px solid black;
  border-radius: 3px;

  background-color: #eee;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pointer = styled.div`
  cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <RightAligned>
        <StyledLink to={'/login'}>Войти</StyledLink>
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
