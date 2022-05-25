import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { v4 as uuidv4 } from 'uuid';

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
  background: blue;
  width: calc(100% * 2);
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
      <BackwardArrow onClick={onClickBackwardHandler} fontSize="small" />
      <ForwardArrow onClick={onClickForwardHandler} fontSize="small" />
      <Slide>
        <Items currentTranslateX={`${cardListTranslateX.toString()}px`} />
      </Slide>
    </StyledModal>
  );
};
export default CalendarModal;
