import React, { useContext } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import CalendarContext from '../../store/CalendarContext';
import Container from '../../UI/Container';

const Period = ({ setOpenedModal }) => {
  const { checkedDate } = useContext(CalendarContext);
  const checkInDateString = checkedDate.checkIn?.toLocaleDateString() || '날짜 입력';
  const checkOutDateString = checkedDate.checkOut?.toLocaleDateString() || '날짜 입력';

  return (
    <Container onClick={() => setOpenedModal('CALENDAR')}>
      <SearchBarSection
        SearchBarSectionInfo={[
          {
            name: '체크인',
            value: checkInDateString,
          },
          { name: '체크아웃', value: checkOutDateString },
        ]}
      />
    </Container>
  );
};
export default Period;
