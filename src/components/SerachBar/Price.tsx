import React from 'react';
import Input from '../../UI/Input';
import Container from '../../UI/Container';

const Price = () => (
  <Container>
    <Input InputInfoArray={[{ name: '요금', value: '금액대 설정' }]} />
  </Container>
);

export default Price;
