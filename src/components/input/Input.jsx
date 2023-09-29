import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { ref } from 'yup';

const InputContainer = forwardRef(({ className, ...props }, ref) => {
  return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
  height: 40px;
  width: 100%;
  border: 1px solid black;

  font-size: 18px;

  padding: 10px;
  margin-bottom: 10px;
`;
