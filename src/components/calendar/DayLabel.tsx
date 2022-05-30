import React from 'react';
import styled from 'styled-components';

const DayLabel = ({ side }: { side: 'LEFT' | 'RIGHT' }) => (
  <DayLabelContainer side={side}>
    {['일', '월', '화', '수', ' 목', '금', '토'].map((day) => (
      <div key={`${side}${day}`}>{day}</div>
    ))}
  </DayLabelContainer>
);

const DayLabelContainer = styled.div<{ side: 'LEFT' | 'RIGHT' }>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')};
  color: ${({ theme }) => theme.colors.lightGrey};
  position: absolute;
  top: 100px;
  ${({ side }) => (side === 'LEFT' ? 'left: 112px' : 'right: 112px')};

  div {
    width: 48px;
    height: 24px;
    text-align: center;
  }
`;

export default DayLabel;
