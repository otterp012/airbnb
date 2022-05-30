import React from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import Container from '../../UI/Container';

const Personnel = () => (
  <Container>
    <SearchBarSection SearchBarSectionInfo={[{ name: '인원', value: '게스트 추가' }]} isLast />
  </Container>
);

export default Personnel;
