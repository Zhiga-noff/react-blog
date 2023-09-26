import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';

const LargeText = styled.div`
  font-size: 42px;
  font-weight: bold;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const LogoContainer = ({ className }) => {
  return (
    <div className={className}>
      <Icon id={'fa-code'} size={'70px'} margin={'0 10px 0 0'} />
      <div>
        <LargeText>БЛОГ</LargeText>
        <SmallText>веб-разработчика</SmallText>
      </div>
    </div>
  );
};

export const Logo = styled(LogoContainer)`
  display: flex;
  margin-top: -6px;
  align-items: center;
`;
