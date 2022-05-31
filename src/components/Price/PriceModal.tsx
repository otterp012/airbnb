import React from 'react';
import Container from '../../UI/Container';
import Graph from './Graph';

const PriceModal = () => (
  <Container
    width="400px"
    height="355px"
    flexInfo={['column', 'center', 'flex-start', 'wrap']}
  >
    <Graph />
  </Container>
);

export default PriceModal;
