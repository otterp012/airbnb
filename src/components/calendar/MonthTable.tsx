import React, { useContext } from 'react';
import styled from 'styled-components';
import MonthTHead from './MonthTHead';
import MonthTBody from './MonthTBody';
import CalendarContext from '../../store/calendarStore/CalendarContext';

const MonthTable = ({ year, month }: { year: number; month: number }) => {
  const { checkedDate, dispatchCheckedDate } = useContext(CalendarContext);

  const onMouseLeaveHandler = () => {
    if (checkedDate.checkOut) return;
    dispatchCheckedDate({ type: 'HOVER', payload: null });
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
