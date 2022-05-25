import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getFirstDayIdx, getLastDate, splitDatesToWeeks } from '../../util/calenderUtil';
import WeekTableRow from './WeekTRow';

const CalendarMonthTable = ({ year, month }: { year: number; month: number }) => {
  const firstDayIdx = getFirstDayIdx(year, month);
  const lastDate = getLastDate(year, month);
  const weekArr = splitDatesToWeeks(firstDayIdx, lastDate);

  return (
    <tbody>
      {weekArr.map((week) => (
        <WeekTableRow year={year} month={month} week={week} key={uuidv4()} />
      ))}
    </tbody>
  );
};

export default CalendarMonthTable;
