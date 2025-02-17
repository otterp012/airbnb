import React from 'react';
import styled from 'styled-components';

const MonthTHead = ({ year, month }: { year: number; month: number }) => {
  const monthTitle = `${year}년 ${month}월`;
  return (
    <MonthTableHead>
      <tr>
        <th colSpan={7}>{monthTitle}</th>
      </tr>
    </MonthTableHead>
  );
};

export default MonthTHead;

const MonthTableHead = styled.thead`
  font-weight: 700;
  height: 70px;
`;
