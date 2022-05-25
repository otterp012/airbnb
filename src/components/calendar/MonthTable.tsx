import React from 'react';
import styled from 'styled-components';
import MonthTHeaad from './MonthTHead';
import MonthTBody from './MonthTBody';

const DayNameSpace = styled.div`
  height: 52px;
`;

const MonthTable = ({ year, month }: { year: number; month: number }) => (
  <table>
    <MonthTHeaad year={year} month={month} />
    <DayNameSpace />
    <MonthTBody year={year} month={month} />
  </table>
);

export default MonthTable;
