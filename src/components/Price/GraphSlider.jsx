import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Input from '../../UI/Input';
import {
  usePriceStateContext,
  usePriceDispatchContext,
} from '../../store/priceStore/PriceContext';

const GRAPH_WIDTH = 355;
const MAX_PRICE = 1_000_000;
const INPUT_MAX_VALUE = 100;
const ONE_PER_UNIT = MAX_PRICE / INPUT_MAX_VALUE;
const ONE_PER_GRAPH_WIDTH = GRAPH_WIDTH / INPUT_MAX_VALUE;
const ONE_PER_PRICE = MAX_PRICE / GRAPH_WIDTH;
//
const MIN_BETWEEN_RATIO = 5;

const GraphSlider = ({ setPriceCoord, priceCoord }) => {
  const { minPrice, maxPrice } = usePriceStateContext();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChangeHandler = ({ target }) => {
    const currentMinRatio = Number(minPriceRef.current.value);
    const currentMaxRatio = Number(maxPriceRef.current.value);

    if (target.id === 'minPrice') {
      if (currentMinRatio > currentMaxRatio - MIN_BETWEEN_RATIO) {
        minPriceRef.current.value = currentMaxRatio - MIN_BETWEEN_RATIO;
        return;
      }
    }

    if (target.id === 'maxPrice') {
      if (currentMinRatio > currentMaxRatio - MIN_BETWEEN_RATIO) {
        maxPriceRef.current.value = currentMinRatio + MIN_BETWEEN_RATIO;
        return;
      }
    }
    setPriceCoord({
      min: currentMinRatio * ONE_PER_GRAPH_WIDTH,
      max: currentMaxRatio * ONE_PER_GRAPH_WIDTH,
    });
  };

  useEffect(() => {
    if (!(minPrice && maxPrice)) return;
    setPriceCoord({
      min: minPrice / ONE_PER_PRICE,
      max: maxPrice / ONE_PER_PRICE,
    });
    minPriceRef.current.value = minPrice / 10000;
    maxPriceRef.current.value = maxPrice / 10000;
  }, [minPrice, maxPrice]);

  return (
    <Slider>
      <Input
        ref={minPriceRef}
        label="minPrice"
        info={{
          id: 'minPrice',
          type: 'range',
          min: 0,
          max: 100,
          defaultValue: 0,
          onInput: onChangeHandler,
        }}
        style={GraphInputStyle}
      />
      <Input
        ref={maxPriceRef}
        label="maxPrice"
        info={{
          id: 'maxPrice',
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
