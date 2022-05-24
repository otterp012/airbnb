import React from 'react';
import styled from 'styled-components';
import Input from '../UI/Input';

const PeriodContainer = styled.div`
  width: 360px;
  background: red;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-around')}
`;

const Period = () => (
  <PeriodContainer>
    <Input
      width="360px"
      InputInfoArray={[
        { name: '체크인', value: '날짜 입력' },
        { name: '체크아웃', value: '날짜 입력' },
      ]}
    />
  </PeriodContainer>
);

export default Period;
