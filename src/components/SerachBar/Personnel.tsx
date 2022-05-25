import React from 'react';
import Input from '../../UI/Input';
import Container from '../../UI/Container';

const Personnel = () => (
  <Container>
    <Input InputInfoArray={[{ name: '인원', value: '게스트 추가' }]} isLast />
  </Container>
);

export default Personnel;
