import React, { useContext } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import PersonnelContext from '../../store/PersonnelContext';
import Container from '../../UI/Container';

const Personnel = ({ setOpenedModal }) => {
  const { personnel } = useContext(PersonnelContext);
  const personnelValue =
    personnel.ADULT + personnel.CHILD + personnel.INFANT === 0
      ? '게스트 추가'
      : `게스트 ${personnel.ADULT + personnel.CHILD}명, 유아 ${personnel.INFANT}명`;

  return (
    <Container onClick={() => setOpenedModal('PERSONNEL')}>
      <SearchBarSection SearchBarSectionInfo={[{ name: '인원', value: personnelValue }]} isLast />
    </Container>
  );
};

export default Personnel;
