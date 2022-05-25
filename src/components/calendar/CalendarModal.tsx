import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { v4 as uuidv4 } from 'uuid';
import MonthTable from './MonthTable';

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 202px;
  left: 250px;
  width: 916px;
  height: 512px;
  background: #fff;
  border-radius: 40px;
`;

const ForwardArrow = styled(ArrowForwardIosIcon)`
  position: absolute;
  top: 10%;
  left: 90%;
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
  overflow: hidden;
  top: 10%;
  width: 760px;
  height: 400px;
`;

const Items = styled.div<{ currentTranslateX: string }>`
  display: flex;
  height: 100%;
  z-index: -1;
  width: calc(100% * 2);
  ${({ theme }) => theme.mixin.flexMixin('row', 'flex-start', 'space-between')}
  transform: translateX(${({ currentTranslateX }) => currentTranslateX});
`;

const CalendarModal = () => {
  const [cardListTranslateX, setCardListTranslateX] = useState(0);

  const onClickForwardHandler = () => {
    setCardListTranslateX((prev) => prev - 380);
  };

  const onClickBackwardHandler = () => {
    setCardListTranslateX((prev) => prev + 380);
  };
  return (
    <StyledModal>
      <BackwardArrow onClick={onClickBackwardHandler} fontSize='small' />
      <ForwardArrow onClick={onClickForwardHandler} fontSize='small' />
      <Slide>
        <Items currentTranslateX={`${cardListTranslateX.toString()}px`}>
          <MonthTable year={2022} month={5} />
          <MonthTable year={2022} month={6} />
          <MonthTable year={2022} month={7} />
          <MonthTable year={2022} month={8} />
        </Items>
      </Slide>
    </StyledModal>
  );
};
export default CalendarModal;
