import React from 'react';
import styled from 'styled-components';
import MonthTHead from './MonthTHead';
import MonthTBody from './MonthTBody';
import {
  useCalendarStateContext,
  useCalendarDispatchContext,
} from '../../store/calendarStore/CalendarContext';

const MonthTable = ({ year, month }: { year: number; month: number }) => {
  const calendarState = useCalendarStateContext();
  const dispatchCalendar = useCalendarDispatchContext();

  const onMouseLeaveHandler = () => {
    if (calendarState.checkOut) return;
    dispatchCalendar({ type: 'HOVER', payload: null });
  };

  return (
    <StyledTable onMouseLeave={onMouseLeaveHandler}>
      <MonthTHead year={year} month={month} />
      <MonthTBody year={year} month={month} />
    </StyledTable>
  );
};

const StyledTable = styled.table`
  -webkit-user-select: none;
`;

export default MonthTable;
