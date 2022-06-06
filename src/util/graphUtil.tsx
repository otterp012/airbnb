const smoothing = 0.2;

const pointsArray = [
  [0, 0],
  [20, 10],
  [40, 40],
  [60, 30],
  [80, 5],
  [100, 45],
  [120, 10],
  [140, 45],
  [160, 10],
  [180, 20],
  [200, 30],
  [220, 30],
  [240, 20],
  [260, 50],
  [280, 99],
  [300, 84],
  [320, 76],
  [340, 10],
  [345, 100],
  [350, 100],
  [355, 100],
  [355.1, 0],
];
// 0~ 355까지 맞춰야함
const line = (pointA: number[], pointB: number[]) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];
  return {
    length: Math.sqrt(lengthX ** 2 + lengthY ** 2),
    angle: Math.atan2(lengthY, lengthX),
  };
};

const controlPoint = (
  current: number[],
  previous: number[],
  next: number[],
  reverse?: boolean,
) => {
  const p = previous || current;
  const n = next || current;

  const o = line(p, n);

  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * smoothing;
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};

const bezierCommand = (point: number[], i: number, a: number[][]) => {
  const cps = controlPoint(a[i - 1], a[i - 2], point);
  const cpe = controlPoint(point, a[i - 1], a[i + 1], true);
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
};

const pathCoords = pointsArray.reduce((acc, cur, i, a) => {
  if (!i) return `M ${cur[0]},${cur[1]}`;
  return `${acc} ${bezierCommand(cur, i, a)}`;
}, '');

export { pathCoords };
