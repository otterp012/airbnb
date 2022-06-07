import React, { Dispatch } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import {
  useCalendarStateContext,
  useCalendarDispatchContext,
} from '../../store/calendarStore/CalendarContext';
import { calendarActions } from '../../store/calendarStore/calendarReducer';
import Container from '../../UI/Container';
import { ModalType } from '../../types/types';

const Period = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const calendarState = useCalendarStateContext();
  const dispatchCalendar = useCalendarDispatchContext();
  const { deleteActionCreator } = calendarActions;
  const checkInDateString = calendarState.checkIn?.toLocaleDateString();
  const checkOutDateString = calendarState.checkOut?.toLocaleDateString();

  return (
    <Container onClick={() => setOpenedModal('CALENDAR')}>
      <SearchBarSection
        searchBarSectionInfo={[
          {
            name: '체크인',
            placeholder: '날짜 입력',
            value: checkInDateString,
          },
          {
            name: '체크아웃',
            placeholder: '날짜 입력',
            value: checkOutDateString,
          },
        ]}
        isLast={false}
        initSection={() => dispatchCalendar(deleteActionCreator())}
      />
    </Container>
  );
};
export default Period;
