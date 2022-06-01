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
  const { checkedDate, dispatchCheckedDate } = useContext(CalendarContext);
  const checkInDateString = checkedDate.checkIn?.toLocaleDateString();
  const checkOutDateString = checkedDate.checkOut?.toLocaleDateString();
  const test = () => dispatchCheckedDate({ type: 'DELETE' });

  return (
    <Container onClick={() => setOpenedModal('CALENDAR')}>
      <SearchBarSection
        searchBarSectionInfo={[
          {
            name: '체크인',
            placeholder: '날짜 입력',
            value: checkInDateString,
          },
          { name: '체크아웃', placeholder: '날짜 입력', value: checkOutDateString },
        ]}
        isLast={false}
        initSection={() => dispatchCheckedDate({ type: 'DELETE' })}
      />
    </Container>
  );
};
export default Period;
