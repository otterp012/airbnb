import React from 'react';

const MonthTHead = ({ year, month }: { year: number; month: number }) => {
  const monthTitle = `${year}년 ${month}월`;
  return (
    <thead>
      <tr>
        <th colSpan={7}>{monthTitle}</th>
      </tr>
    </thead>
  );
};

export default MonthTHead;
