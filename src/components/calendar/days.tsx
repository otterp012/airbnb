import React from 'react';

const Days: React.FC<{ arr: number[] }> = ({ arr }) => {
  return (
    <tr>
      {arr.map((v) => (
        <td>{v}</td>
      ))}
    </tr>
  );
};

export default Days;
