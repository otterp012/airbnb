import React, { useContext } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import CalendarContext from '../../store/CalendarContext';

const Period = () => {
  const { checkedDate } = useContext(CalendarContext);
  const checkInDateString =
    checkedDate.checkIn?.toLocaleDateString() || '날짜 입력';
  const checkOutDateString =
    checkedDate.checkOut?.toLocaleDateString() || '날짜 입력';

  return (
    <SearchBarSection
      SearchBarSectionInfo={[
        {
          name: '체크인',
          value: checkInDateString,
        },
        { name: '체크아웃', value: checkOutDateString },
      ]}
    />
  );
};
export default Period;
