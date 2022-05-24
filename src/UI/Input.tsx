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
//     input={{
//       id: 'amount',
//       type: 'number',
//       min: '0',
//       max: amountCtx.balance,
//       defaultValue: '0',
//       placeholder ...
//     }}
//   />

const InputContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'center', 'center')};
`;

// form ---- // onSubmit
// input1 input2 input3
const Input: React.FC<{ input: string; id: string; label: string }> = (
  props,
  ref,
) => (
  <InputContainer>
    <label htmlFor={props.input}>{props.label}</label>
    <input ref={ref} {...props.input}/>
  </InputContainer>
);

type InputTypes: {
    id: string
}


export default Input;
