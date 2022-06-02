import React from 'react';
import styled from 'styled-components';
import { pathCoords } from '../../util/graphUtil';
import GraphSlider from './GraphSlider';
import { usePriceStateContext } from '../../store/priceStore/PriceContext';
import {
  GRAPH_WIDTH,
  ONE_PER_UNIT,
  ONE_PER_GRAPH_WIDTH,
} from '../../constants/graphConstants';

const Graph = () => {
  const { minPrice, maxPrice } = usePriceStateContext();
  const currentMinCoord =
    minPrice === null ? 0 : (minPrice * ONE_PER_GRAPH_WIDTH) / ONE_PER_UNIT;
  const currentMaxCoord = maxPrice
    ? (maxPrice * ONE_PER_GRAPH_WIDTH) / ONE_PER_UNIT
    : GRAPH_WIDTH;

  return (
    <GraphWrapper>
      <GraphSvg width="355" height="100" viewBox="0 0 355 100">
        <defs>
          <mask id="mask">
            <rect x="0" y="0" width="355" height="100" fill="grey" />
            <rect
              x={currentMinCoord}
              y="0"
              width="355"
              height="100"
              fill="white"
            />
            <rect
              x={currentMaxCoord}
              y="0"
              width="355"
              height="100"
              fill="grey"
            />
          </mask>
        </defs>
        <path mask="url(#mask)" d={pathCoords} strokeWidth="0.4" />
      </GraphSvg>
      <GraphSlider minCoord={currentMinCoord} maxCoord={currentMaxCoord} />
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
