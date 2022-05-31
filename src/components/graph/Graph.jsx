import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Graph = () => {
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
          d={ddd}
          stroke="red"
          strokeWidth="0.4"
          fill="black"
        />
      </GraphSvg>
      <Slider />
    </Wrapper>
  );
};

const Btn = styled.div`
  width: 35px;
  height: 30px;
  background: red;
  position: absolute;
  left: 100px;
  top: 100px;
`;
// left: ${({ left }) => left + 'px'};
// top: ${({ y }) => y + 'px'};
const Slider = styled.div`
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
const smoothing = 0.2;

const points = [
  [0, 0],
  [5, 10],
  [10, 40],
  [40, 30],
  [60, 5],
  [90, 45],
  [120, 10],
  [150, 45],
  [200, 10],
  [300, 10],
  [350, 0],
];

const line = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX),
  };
};

const controlPoint = (current, previous, next, reverse) => {
  const p = previous || current;
  const n = next || current;

  const o = line(p, n);

  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * smoothing;
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};

const bezierCommand = (point, i, a) => {
  const cps = controlPoint(a[i - 1], a[i - 2], point);
  const cpe = controlPoint(point, a[i - 1], a[i + 1], true);
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
};

const svgPath = (points, command) => {
  // build the d attributes by looping over the points
  const d = points.reduce(
    (acc, point, i, a) =>
      i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${command(point, i, a)}`,
    '',
  );
  return d;
};

const ddd = points.reduce((acc, cur, i, a) => {
  if (!i) return `M ${cur[0]},${cur[1]}`;
  return `${acc} ${bezierCommand(cur, i, a)}`;
}, '');

export default Graph;
