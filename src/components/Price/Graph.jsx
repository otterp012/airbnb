import React, { useState } from 'react';
import styled from 'styled-components';
import { pathCoords } from '../../util/graphUtil';
// 문제 상황 : clientX, pageX 속성 사용하니
// 고정된 시점의 x 좌표값을 가지게 오게 되어서 문제였음
// 해결 :getBoundingClientRect 메서드 사용해서 수정함

const Graph = () => {
  // const testRef = useRef();
  // const [currentLeft, setCurrentLeft] = useState(0);
  // useEffect(() => {
  //   const newLeft = testRef.current.getBoundingClientRect().x;
  //   setCurrentLeft(newLeft);
  // }, []);
  // parentNode 사용이 어려울 시 대체할만한 코드

  const [left, setLeft] = useState(-17.5);
  const [isDrag, setIsDrag] = useState({ left: false, right: false });
  const [left2, setLeft2] = useState(335);
  const mouseDownHandler = (e) => {
    if (e.target.dataset.place === 'left') {
      setIsDrag({ left: true, right: false });
    } else {
      setIsDrag({ left: false, right: true });
    }
  };
  const mouseMoveHandler = (e) => {
    if (e.target.dataset.place === 'left') {
      if (left > left2 - 35) {
        return setLeft(left2 - 35);
      }
      // 35는 btn width
      if (isDrag.left) {
        const newX =
          e.clientX - e.target.parentNode.getBoundingClientRect().x - 20;

        setLeft(newX < -17.5 ? -17.5 : newX);
      }
    }

    if (e.target.dataset.place === 'right') {
      if (left2 < left + 35) {
        return setLeft2(left + 35);
      }

      if (isDrag.right) {
        const newX =
          e.clientX - e.target.parentNode.getBoundingClientRect().x - 20;
        // 여기서 20은 패딩값
        setLeft2(newX > 330 ? 330 : newX);
      }
    }
  };

  const mouseUpHandler = () => {
    setIsDrag({ left: false, right: false });
  };

  return (
    <Wrapper>
      <GraphSvg width="400" height="100" viewBox="0 0 400 100">
        <defs>
          {/* width는 path의 width 가져와서 등록하기 */}
          <mask id="mask">
            <rect x="0" y="0" width="350" height="100" fill="red" />
            <rect x={left + 17.5} y="0" width="350" height="100" fill="grey" />
            {/* 왼쪽 클릭 버튼으로 옮겨주어야 할 부분 0부터 시작 */}
            <rect x={left2 + 17.5} y="0" width="350" height="100" fill="red" />
            {/* 오른쪽 버튼으로 옮겨주어야 할 부분 250에서 --로 진행 */}
          </mask>
        </defs>

        <path
          mask="url(#mask)"
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

        <Btn
          data-place="right"
          style={{ background: 'black' }}
          onMouseDown={mouseDownHandler}
          onMouseMove={mouseMoveHandler}
          onMouseUp={mouseUpHandler}
          onDragStart={() => false}
          left={left2}
        />
      </Slider>
    </Wrapper>
  );
};

const Btn = styled.div`
  width: 35px;
  height: 30px;
  background: red;
  left: 30px;
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

const Wrapper = styled.div`
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const GraphSvg = styled.svg`
  transform: scaleY(-1);
`;

export default Graph;
