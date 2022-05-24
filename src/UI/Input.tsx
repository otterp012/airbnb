import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div<{ width: string }>`
  position: relative;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'flex-start')}
  width: ${({ width }) => width};
  span {
    display: block;
  }
`;

const InputInfoContainer = styled.div<{ inputInfoLength: number }>`
  width: ${({ inputInfoLength }) =>
    `calc( (100% / ${inputInfoLength}) - 15px)`};
`;

const InputName = styled.span`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const InputValue = styled.span`
  font-size: 16px;
  color: #4f4f4f;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 26px;
`;

type InputTypes = {
  name: string;
  value: string;
};

const Input: React.FC<{ InputInfoArray: InputTypes[]; width: string }> = ({
  InputInfoArray,
  width,
}) => (
  <InputContainer width={width}>
    {InputInfoArray.map((inputInfo) => (
      <InputInfoContainer
        key={inputInfo.name}
        inputInfoLength={InputInfoArray.length}
      >
        <InputName>{inputInfo.name}</InputName>
        <InputValue>{inputInfo.value}</InputValue>
      </InputInfoContainer>
    ))}
    <DeleteButton />
  </InputContainer>
);

export default Input;
