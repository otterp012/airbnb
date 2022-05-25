import React from 'react';
import MonthTHeaad from './MonthTHead';
import MonthTBody from './MonthTBody';

const MonthTable = ({ year, month }: { year: number; month: number }) => (
  <table>
    <MonthTHeaad year={year} month={month} />
    <MonthTBody year={year} month={month} />
  </table>
);

export default MonthTable;

// table 안을 꾸미는 것
//  < -------- >
// 모달 + 슬라이더 작업 <- -> << 화살표 만들기
