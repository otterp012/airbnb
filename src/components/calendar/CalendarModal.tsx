import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MonthTable from './MonthTable';
import {
  YearMonthType,
  getCurrentYearMonth,
  calYearMonth,
} from '../../util/calenderUtil';

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 182px;
  left: 250px;
  width: 916px;
  height: 512px;
  background: #fff;
  border-radius: 40px;
`;

//Todo: Arrow 하나의 컴포넌트로 합치기(props로 구체화)

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

type TransformInfoType = {
  translateX: number;
  direction: 'FORWARD' | 'BACKWARD' | null;
};

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
    const slideYearMonthArr = [];
    for (let i = rangeMin; i <= rangeMax; i += 1) {
      slideYearMonthArr.push(calYearMonthByBaseYearMonth(i));
    }
    return slideYearMonthArr;
  };

  const onClickForwardHandler = () => {
    setTransformInfo((prev) => {
      return { translateX: prev.translateX - 380, direction: 'FORWARD' };
    });
  };

  const onClickBackwardHandler = () => {
    setTransformInfo((prev) => {
      return { translateX: prev.translateX + 380, direction: 'BACKWARD' };
    });
  };

  const onTransitionEndHandler = () => {
    const direction = transformInfo.direction === 'FORWARD' ? 1 : -1;
    setBaseYearMonth(calYearMonthByBaseYearMonth(direction));
    setTransformInfo({ translateX: -380, direction: null });
  };

  return (
    <StyledModal>
      <BackwardArrow onClick={onClickBackwardHandler} fontSize="small" />
      <ForwardArrow onClick={onClickForwardHandler} fontSize="small" />
      <Slide>
        <Items
          translateX={transformInfo.translateX}
          direction={transformInfo.direction}
          onTransitionEnd={onTransitionEndHandler}
        >
          {getSlideYearMonthArr(-1, 2).map((yearMonth) => (
            <MonthTable
              key={String(yearMonth.year) + String(yearMonth.month)}
              {...yearMonth}
            />
          ))}
        </Items>
      </Slide>
    </StyledModal>
  );
};
export default CalendarModal;
