import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { pathCoords } from '../../util/graphUtil';
import PriceText from './PriceText';
import GraphSlider from './GraphSlider';
import {
  usePriceStateContext,
  usePriceDispatchContext,
} from '../../store/priceStore/PriceContext';

const GRAPH_WIDTH = 355;
const MAX_PRICE = 1_000_000;
const INPUT_MAX_VALUE = 100;
const ONE_PER_UNIT = MAX_PRICE / INPUT_MAX_VALUE;
// 비율 1 당 가격
const ONE_PER_GRAPH_WIDTH = GRAPH_WIDTH / INPUT_MAX_VALUE;
const ONE_PER_PRICE = MAX_PRICE / GRAPH_WIDTH;
//
const MIN_BETWEEN_RATIO = 5;

const Graph = () => {
  const dispatchPrice = usePriceDispatchContext();
  const [priceCoord, setPriceCoord] = useState({ min: 0, max: GRAPH_WIDTH });

  useEffect(
    () =>
      dispatchPrice({
        minPrice: priceCoord.min * ONE_PER_PRICE,
        maxPrice: priceCoord.max * ONE_PER_PRICE,
      }),
    [priceCoord],
  );

  return (
    <GraphWrapper>
      <GraphSvg width="355" height="100" viewBox="0 0 355 100">
        <defs>
          <mask id="mask">
            <rect x="0" y="0" width="355" height="100" fill="grey" />
            <rect
              x={priceCoord.min}
              y="0"
              width="355"
              height="100"
              fill="white"
            />
            <rect
              x={priceCoord.max}
              y="0"
              width="355"
              height="100"
              fill="grey"
            />
          </mask>
        </defs>
        <path mask="url(#mask)" d={pathCoords} strokeWidth="0.4" />
      </GraphSvg>
      <GraphSlider setPriceCoord={setPriceCoord} priceCoord={priceCoord} />
    </GraphWrapper>
  );
};

const GraphWrapper = styled.div`
  width: 380px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GraphSvg = styled.svg`
  transform: scaleY(-1);
  width: 100%;
  height: 100px;
`;

export default Graph;
