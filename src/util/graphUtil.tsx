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
  [210, 20],
  [250, 30],
  [300, 30],
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

export const pathCoords = points.reduce((acc, cur, i, a) => {
  if (!i) return `M ${cur[0]},${cur[1]}`;
  return `${acc} ${bezierCommand(cur, i, a)}`;
}, '');
