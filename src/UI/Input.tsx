import React from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
// todo Input 컴포넌트 이름 바꾸기

const InputContainer = styled.div<{ isLast?: boolean }>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')}
  ${({ isLast }) =>
    !isLast &&
    css`
      border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
    `}
  padding-right: 35px;
  span {
    display: block;
  }
`;

const InputInfoContainer = styled.div<{ inputInfoLength: number }>`
  width: 110px;
  margin-left: 24px;
  cursor: pointer;
`;

const InputName = styled.span`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 700;
`;

const InputValue = styled.span`
  color: #4f4f4f;
  line-height: 16px;
`;

const DeleteButton = styled(CloseIcon)`
  background: ${({ theme }) => theme.colors.grey};
  padding: 4px;
  border-radius: 100%;
  margin-left: 26px;
  cursor: pointer;
`;

type InputTypes = {
  name: string;
  value: string;
};

const Input = ({
  InputInfoArray,
  isLast = false,
}: {
  InputInfoArray: InputTypes[];
  isLast: boolean;
}) => (
  <InputContainer isLast={isLast}>
    {InputInfoArray.map(({ name, value }) => (
      <InputInfoContainer key={name} inputInfoLength={InputInfoArray.length}>
        <InputName>{name}</InputName>
        <InputValue>{value}</InputValue>
      </InputInfoContainer>
    ))}
    <DeleteButton fontSize="small" />
  </InputContainer>
);

export default Input;
