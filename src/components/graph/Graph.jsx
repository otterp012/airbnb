import React, { useState } from 'react';
import styled from 'styled-components';
import { pathCoords } from '../../util/graphUtil';

const Graph = () => {
  // todo 드래그
  const [left, setLeft] = useState(0);
  const dragStartHandler = (e) => {
    setLeft(e.clientX - 350);
  };

  const dragHander = (e) => {
    setLeft(e.clientX + e.offsetX - 350);
  };

  return (
    <Wrapper>
      <GraphSvg width="400" height="100" viewBox="0 0 400 100">
        <defs>
          {/* width는 path의 width 가져와서 등록하기 */}
          <mask id="mask">
            <rect x="0" y="0" width="350" height="100" fill="red" />
            <rect x="42" y="0" width="350" height="100" fill="grey" />
            {/* 왼쪽 클릭 버튼으로 옮겨주어야 할 부분 0부터 시작 */}
            <rect x="177" y="0" width="350" height="100" fill="red" />
            {/* 오른쪽 버튼으로 옮겨주어야 할 부분 250에서 --로 진행 */}
          </mask>
        </defs>

        <path
          mask="url(#mask)"
          clipPath="url(#clippath)"
          d={pathCoords}
          stroke="red"
          strokeWidth="0.4"
          fill="black"
        />
      </GraphSvg>
      <Slider>
        <Btn
          draggable
          onDragEnd={dragStartHandler}
          onDrag={dragHander}
          left={left}
        />
      </Slider>
    </Wrapper>
  );
};

const Btn = styled.div`
  width: 35px;
  height: 30px;
  background: red;
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: 20px;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background: blue;
`;

// Wrapper 길이 path랑 맞춰야함
const Wrapper = styled.div`
  position: relative;
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;
const GraphSvg = styled.svg`
  transform: scaleY(-1);
`;

export default Graph;
