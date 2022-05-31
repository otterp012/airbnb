import React, { useContext, Dispatch } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import CalendarContext from '../../store/calendarStore/CalendarContext';
import Container from '../../UI/Container';
import { ModalType } from '../../types/types';

const Period = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const { checkedDate } = useContext(CalendarContext);
  const checkInDateString =
    checkedDate.checkIn?.toLocaleDateString() || '날짜 입력';
  const checkOutDateString =
    checkedDate.checkOut?.toLocaleDateString() || '날짜 입력';

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
        isLast={false}
      />
    </Container>
  );
};
export default Period;
