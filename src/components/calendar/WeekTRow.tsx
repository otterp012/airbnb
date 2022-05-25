import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const WeekRow = styled.tr`
  margin-bottom: 4px;
`;

const DateBox = styled.td`
  width: 48px;
  height: 48px;
`;

const DateData = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
  font-weigth: 800;
  font-size: 0.75rem;

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
    box-sizing: border-box;
  }
`;

const WeekTableRow = ({ year, month, week }: { year: number; month: number; week: number[] }) => {
  const today = new Date();

  return (
    <WeekRow>
      {week.map((date) => (
        <DateBox key={uuidv4()}>
          <DateData>{date}</DateData>
        </DateBox>
      ))}
    </WeekRow>
  );
};
export default WeekTableRow;
