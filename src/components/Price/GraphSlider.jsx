import React, { useRef } from 'react';
import styled from 'styled-components';
import Input from '../../UI/Input';
import {
  ONE_PER_GRAPH_WIDTH,
  MIN_BETWEEN_RATIO,
} from '../../constants/graphConstansts';

let init = true;
const GraphSlider = ({ setPriceCoord, priceCoord }) => {
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChangeHandler = () => {
    const currentMinRatio = minPriceRef.current.value;
    const currentMaxRatio = maxPriceRef.current.value;
    if (currentMinRatio > currentMaxRatio - MIN_BETWEEN_RATIO) return;

    setPriceCoord({
      min: currentMinRatio * ONE_PER_GRAPH_WIDTH,
      max: currentMaxRatio * ONE_PER_GRAPH_WIDTH,
    });
  };

  return (
    <Slider>
      <Input
        ref={minPriceRef}
        label="minPrice"
        info={{
          type: 'range',
          min: 0,
          max: 100,
          defaultValue: 0,
          onChange: onChangeHandler,
        }}
        style={GraphInputStyle}
      />
      <Input
        ref={maxPriceRef}
        label="maxPrice"
        info={{
          type: 'range',
          min: 0,
          max: 100,
          defaultValue: 100,
          onChange: onChangeHandler,
        }}
        style={GraphInputStyle}
      />
      <Thumb left={priceCoord.min} />
      <Thumb left={priceCoord.max} />
    </Slider>
  );
};

export default GraphSlider;

const Slider = styled.div`
  position: relative;
  width: calc(100% - 5px);
  height: 10px;
`;

const Thumb = styled.div`
  position: absolute;
  top: -10px;
  left: ${({ left }) => `${left}px`};
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 50%;
  z-index: 1;
`;

const GraphInputStyle = `
  position: absolute;
  top: -1px;
  left: -1.5px;
  height: 0;
  width: 100%;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;
