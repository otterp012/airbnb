import React from 'react';
import SearchBarSection from '../../UI/SearchBarSection';

const Personnel = () => (
  <SearchBarSection
    SearchBarSectionInfo={[{ name: '인원', value: '게스트 추가' }]}
    isLast
  />
);

export default Personnel;
