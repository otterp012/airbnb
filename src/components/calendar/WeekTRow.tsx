import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const WeekTableRow = ({ week }: { week: number[] }) => (
  <tr>
    {week.map((date) => (
      <td key={uuidv4()}>{date}</td>
    ))}
  </tr>
);

export default WeekTableRow;
