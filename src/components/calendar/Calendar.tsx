import React, { ReactNode } from 'react';
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

const Calendar: React.FC<{ year: number; month: number }> = ({
  year,
  month,
}) => {
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

//

// <table>
// <tr>
// <td> </td> * 7
// </tr>
// </table>
// 5월 거 만들기
// 1. 오늘 날짜
// 2. 이번 달 초일 무슨 요일인지 const day = week[new Date(5월 1일).getDay()]
// 3. 이번 달이 몇일까지 있는지 const lastDate = new Date(2022, 2, 0); --> 2월 마지막날짜

// const week = ['sum'.....];
// const
// const day = week[new Date(5월 1일).getDay()]

// const lastDate = new Date(2022, 2, 0); --> 2월 마지막날짜

// const currYear = new Date().getFullYear(); //2022
// const currMonth = new Date().getMonth() + 1; //5
// new Date(`${currYear} ${currMonth}`); //Sun May 01 2022 00:00:00 GMT+0900 (한국 표준시)
// week[new Date(`${currYear} ${currMonth}`).getDay()]; //SUN
// console.log(new Date(2022 - 05 - 01).getDay());

// 매 달의 첫날을 구하는 함수.

// let firstday = 1;

// let tags = '';
// let tmp = '<tr>';
// for (let i = 1; i <= 31; i++) {
//   tmp += `<td>${i}</td>`;
//   if ((firstday + i) % 7 === 0) {
//     tmp += '</tr>';
//     tags += tmp;
//     tmp = '<tr>';
//   }
// }
// tags += tmp;
// console.log(tags);
