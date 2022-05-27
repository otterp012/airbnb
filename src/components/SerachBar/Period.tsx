import React from 'react';
import Input from '../../UI/Input';
import Container from '../../UI/Container';

const Period = () => (
  <Container>
    <Input
      InputInfoArray={[
        { name: '체크인', value: '날짜 입력' },
        { name: '체크아웃', value: '날짜 입력' },
      ]}
    />
  </Container>
);

export default Period;
