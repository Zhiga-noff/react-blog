import React from 'react';
import styled from 'styled-components';

const IconContainer = ({ className }) => (
  <div className={className}>
    <i className={'fa fa-code'} aria-hidden={'true'}></i>
  </div>
);

const Icon = styled(IconContainer)`
  font-size: 70px;
  margin-right: 15px;
`;

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
      <Icon />
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
