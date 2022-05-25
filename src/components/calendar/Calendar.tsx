import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getFirstDayIdx, getLastDate } from '../../util/calenderUtil';
import Days from './days';

const getCalendarDate = (firstDayIdx: number, lastDate: number) => {
  const tags = [];
  let tmp = [];

  for (let i = 1 - firstDayIdx; i <= lastDate; i += 1) {
    tmp.push(i);
    if ((firstDayIdx + i) % 7 === 0) {
      tags.push(tmp);
      tmp = [];
    }
    if (i === lastDate) tags.push(tmp);
  }
  return tags;
};

const Calendar = ({ year, month }: { year: number; month: number }) => {
  const firstDayIdx = getFirstDayIdx(year, month);
  const lastDate = getLastDate(year, month);
  const tags = getCalendarDate(firstDayIdx, lastDate);

  return (
    <table>
      <tbody>
        {tags.map((v) => (
          <Days arr={v} key={uuidv4()} />
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
