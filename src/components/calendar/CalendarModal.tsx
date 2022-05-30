import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { v4 as uuidv4 } from 'uuid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DayLabel from './DayLabel';
import MonthTable from './MonthTable';
import {
  YearMonthType,
  getCurrentYearMonth,
  calYearMonth,
} from '../../util/calenderUtil';

type DirectionType = 'FORWARD' | 'BACKWARD' | null;

type TransformInfoType = {
  translateX: number;
  direction: DirectionType;
};

const CalendarModal = () => {
  const currYearMonth = getCurrentYearMonth();
  const initialTransformInfo: TransformInfoType = {
    translateX: -380,
    direction: null,
  };
  const [baseYearMonth, setBaseYearMonth] = useState(currYearMonth);
  const [transformInfo, setTransformInfo] = useState(initialTransformInfo);

  const calYearMonthByBaseYearMonth = calYearMonth(baseYearMonth);

  const getSlideYearMonthArr = (
    rangeMin: number,
    rangeMax: number,
  ): YearMonthType[] => {
    const rangeArr = Array.from(
      { length: rangeMax - rangeMin + 1 },
      (_, i) => rangeMin + i,
    );
    return rangeArr.map((n) => calYearMonthByBaseYearMonth(n));
  };

  const onClickArrowHandler = (direction: DirectionType) =>
    setTransformInfo((prev) => ({
      translateX:
        direction === 'FORWARD' ? prev.translateX - 380 : prev.translateX + 380,
      direction,
    }));

  const onTransitionEndHandler = () => {
    const direction = transformInfo.direction === 'FORWARD' ? 1 : -1;
    setBaseYearMonth(calYearMonthByBaseYearMonth(direction));
    setTransformInfo({ translateX: -380, direction: null });
  };

  return (
    <StyledModal>
      <DayLabel side="LEFT" />
      <DayLabel side="RIGHT" />
      <BackwardArrow
        onClick={() => onClickArrowHandler('BACKWARD')}
        fontSize="small"
      />
      <ForwardArrow
        onClick={() => onClickArrowHandler('FORWARD')}
        fontSize="small"
      />
      <Slide>
        <Items
          translateX={transformInfo.translateX}
          direction={transformInfo.direction}
          onTransitionEnd={onTransitionEndHandler}
        >
          {getSlideYearMonthArr(-1, 2).map((yearMonth) => (
            <MonthTable key={uuidv4()} {...yearMonth} />
          ))}
        </Items>
      </Slide>
    </StyledModal>
  );
};

export default CalendarModal;

const Items = styled.div<TransformInfoType>`
  display: flex;
  ${({ theme }) => theme.mixin.flexMixin('row', 'flex-start', 'space-around')};
  transform: translateX(${({ translateX }) => `${translateX}px`});
  ${({ direction }) => direction && 'transition: 0.2s'};
  height: 100%;
  width: calc(100% * 2);
  margin-top: 5px;
  z-index: -1;
`;

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 182px;
  left: 250px;
  width: 943px;
  height: 452px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const ForwardArrow = styled(ArrowForwardIosIcon)`
  position: absolute;
  top: 10%;
  right: 10%;
  cursor: pointer;
  z-index: 2;
`;

const BackwardArrow = styled(ArrowBackIosIcon)`
  position: absolute;
  top: 10%;
  left: 10%;
  cursor: pointer;
  z-index: 2;
`;

const Slide = styled.div`
  position: absolute;
  top: 10%;
  width: 760px;
  height: 420px;
  overflow: hidden;
`;
