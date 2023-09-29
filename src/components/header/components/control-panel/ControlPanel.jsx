import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../button/Button';

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Pointer = styled.div`
  cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <RightAligned>
          <Button><Link to={'/login'}>Войти</Link></Button>

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
