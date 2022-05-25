import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Days = ({ arr }: { arr: number[] }) => (
  <tr>
    {arr.map((v) => (
      <td key={uuidv4()}>{v}</td>
    ))}
  </tr>
);

export default Days;
