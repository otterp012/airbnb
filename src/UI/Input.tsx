import React from 'react';
import styled, { css } from 'styled-components';

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.label}></label>
      <CustomInput ref={ref} {...props.info} customStyle={props.style} />
    </>
  );
});

const CustomInput = styled.input`
  ${({ customStyle }) =>
    css`
      ${customStyle}
    `}
`;
export default Input;
