import styled from 'styled-components';
import React from 'react';

const TableRowContainer = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
  display: flex;
  align-items: center;

  border: ${({ border }) => (border ? '1px solid black' : 'none')};
  padding-right: ${({ border }) => (border ? '10px' : '0')};

  & > div {
    display: flex;
    padding: 10px;
  }

  & .login-column {
    width: 172px;
  }

  & .registered-at-column {
    width: 215px;
  }

  & .role-column {
    width: 160px;
  }
`;
