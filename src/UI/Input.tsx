import React from 'react';
import styled, { css } from 'styled-components';

type RangeInputInfoType = {
  id: string;
  type: string;
  min: number;
  max: number;
  defaultValue: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputPropType = {
  info: RangeInputInfoType;
  label: string;
  style: string;
};

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputPropType>(
  (props, ref) => (
    <>
      <label htmlFor={props.label} />
      <CustomInput ref={ref} {...props.info} customStyle={props.style} />
    </>
  ),
);

const CustomInput = styled.input<{ customStyle: string }>`
  ${({ customStyle }) =>
    css`
      ${customStyle}
    `}
`;

export default Input;
