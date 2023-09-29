import React from 'react';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  font-size: 18px;
  width: ${({ width = '100%' }) => width};
  height: 32px;
    cursor: pointer;

  border: 1px solid black;
  border-radius: 3px;

  background-color: #eee;

  display: flex;
  align-items: center;
  justify-content: center;
`;
