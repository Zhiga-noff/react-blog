import styled from 'styled-components';
import React from 'react';

const IconContainer = ({ className, id }) => (
  <div className={className}>
    <i className={`fa ${id}`} aria-hidden={'true'}></i>
  </div>
);

export const Icon = styled(IconContainer)`
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0' }) => margin};
  cursor: pointer;

  color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
`;
