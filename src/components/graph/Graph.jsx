import { QrCodeScannerOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { pathCoords } from '../../util/graphUtil';

const Graph = () => {
  // todo 드래그
  const [left, setLeft] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const mouseDownHandler = (e) => {
    if (e.target.dataset.place === 'left') setIsDrag(true);
  };
  const [left2, setLeft2] = useState(350);
  const [isDrag2, setIsDrag2] = useState(false);
  const mouseMoveHandler = (e) => {
    if (!isDrag) return;
    if (left > left2 - 35) {
      return;
    }
    const x = e.pageX - 100 - e.target.offsetWidth / 2;
    setLeft(x < 0 ? 0 : x);
  };

  const mouseUpHandler = () => {
    setIsDrag(false);
  };

  return (
    <Wrapper>
      <GraphSvg width="400" height="100" viewBox="0 0 400 100">
        <defs>
          {/* width는 path의 width 가져와서 등록하기 */}
          <mask id="mask">
            <rect x="0" y="0" width="350" height="100" fill="red" />
            <rect x={left} y="0" width="350" height="100" fill="grey" />
            {/* 왼쪽 클릭 버튼으로 옮겨주어야 할 부분 0부터 시작 */}
            <rect x="350" y="0" width="350" height="100" fill="red" />
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
          data-place="left"
          onMouseDown={mouseDownHandler}
          onMouseMove={mouseMoveHandler}
          onMouseUp={mouseUpHandler}
          onDragStart={() => false}
          left={left}
        />
        {/*   {/* 공통로직이므로, custom Hook 생각하기 */} */}
        <Btn
          style={{ background: 'black' }}
          // onMouseDown={mouseDownHandler}
          // onMouseMove={mouseMoveHandler}
          // onMouseUp={mouseUpHandelr}
          onDragStart={() => false}
          left={left2}
          // select={select}
        />
      </Slider>
    </Wrapper>
  );
};

const Btn = styled.div`
  width: 35px;
  height: 30px;
  background: red;
  left: -15px;
  z-index: 1;
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
  position: absolute;
  left: 100px;
  top: 300px;
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;
const GraphSvg = styled.svg`
  transform: scaleY(-1);
`;

export default Graph;
