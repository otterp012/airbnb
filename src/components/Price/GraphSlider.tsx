import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Input from '../../UI/Input';
import {
  usePriceStateContext,
  usePriceDispatchContext,
} from '../../store/priceStore/PriceContext';
import {
  ONE_PER_UNIT,
  MIN_BETWEEN_RATIO,
} from '../../constants/graphConstants';

const GraphSlider = ({
  minCoord,
  maxCoord,
}: {
  minCoord: number;
  maxCoord: number;
}) => {
  const { minPrice, maxPrice } = usePriceStateContext();
  const dispatchPrice = usePriceDispatchContext();
  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentMinRatio = Number(minPriceRef?.current?.value);
    const currentMaxRatio = Number(maxPriceRef?.current?.value);
    const isValidRatio = currentMinRatio < currentMaxRatio - MIN_BETWEEN_RATIO;
    if (e.target.id === 'minPrice') {
      if (!isValidRatio && minPriceRef.current) {
        minPriceRef.current.value = String(currentMaxRatio - MIN_BETWEEN_RATIO);
        return;
      }
    }
    if (e.target.id === 'maxPrice') {
      if (!isValidRatio && maxPriceRef.current) {
        maxPriceRef.current.value = String(currentMinRatio + MIN_BETWEEN_RATIO);
        return;
      }
    }
    dispatchPrice({
      minPrice: currentMinRatio * ONE_PER_UNIT,
      maxPrice: currentMaxRatio * ONE_PER_UNIT,
    });
  };

  useEffect(() => {
    if (!(minPrice && maxPrice)) return;
    if (minPriceRef.current && maxPriceRef.current) {
      minPriceRef.current.value = String(minPrice / ONE_PER_UNIT);
      maxPriceRef.current.value = String(maxPrice / ONE_PER_UNIT);
    }
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
          onChange: onChangeHandler,
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
      <Thumb left={minCoord} />
      <Thumb left={maxCoord} />
    </Slider>
  );
};

export default GraphSlider;

const Slider = styled.div`
  position: relative;
  width: calc(100% - 5px);
  height: 10px;
`;

const Thumb = styled.div<{ left: number }>`
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
