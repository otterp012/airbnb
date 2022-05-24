import React from 'react';
import styled from 'styled-components';

// function Input:React.FC = (props, ref) {
//   return (
// <InputContainer>
//   <label htmlFor={props.input.id}>{props.label}</label>
//   <input ref={ref} {...props.input} />
// </InputContainer>
//   );
// };

// function Input(props) {
//     <Input
//     ref={amountInputRef}
//     label="Amount"
// string input
//     input={{
//       id: 'amount',
//       type: 'number',
//       min: '0',
//       max: amountCtx.balance,
//       defaultValue: '0',
//       placeholder ...
// 이 Props 들
//     }}
//   />

const InputContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'center', 'center')};
`;

// form ---- // onSubmit
// input1 input2 input3
type InputTypes = {
  id: string;
  type: string;
  min?: number;
  max?: number;
  defaultValue?: string;
  placeholder?: string;
};

const Input: React.FC<{ input: InputTypes; label: string }> = ({
  input,
  label,
}) => (
  <InputContainer>
    <label htmlFor={label}>{label}</label>
    <input {...input} />
  </InputContainer>
);

export default Input;
