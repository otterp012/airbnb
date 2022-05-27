import React from 'react';
import styled from 'styled-components';
import MonthTHead from './MonthTHead';
import MonthTBody from './MonthTBody';

const MonthTable = ({ year, month }: { year: number; month: number }) => (
  <table>
    <MonthTHead year={year} month={month} />
    <MonthTBody year={year} month={month} />
  </table>
);

export default MonthTable;
