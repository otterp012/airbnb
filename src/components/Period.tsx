import React from 'react';
import Input from '../UI/Input';
import Container from '../UI/Container';

// price, period, personnel 하나 컴포넌트로 합칠 수 있을 것 같음
// 고려해보기

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
