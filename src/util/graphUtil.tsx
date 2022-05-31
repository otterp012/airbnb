// const accommodations = [
//   { id: 1, price: 10000 },
//   { id: 2, price: 20000 },
//   { id: 3, price: 22000 },
//   { id: 4, price: 23000 },
//   { id: 5, price: 25000 },
//   { id: 6, price: 30000 },
//   { id: 7, price: 30000 },
//   { id: 8, price: 30000 },
//   { id: 9, price: 40000 },
//   { id: 10, price: 70000 },
//   { id: 11, price: 81000 },
//   { id: 12, price: 83000 },
//   { id: 13, price: 85000 },
//   { id: 14, price: 87000 },
//   { id: 15, price: 92000 },
//   { id: 16, price: 94000 },
//   { id: 17, price: 96000 },
//   { id: 18, price: 98000 },
//   { id: 20, price: 100000 },
//   { id: 21, price: 110000 },
//   { id: 22, price: 120000 },
//   { id: 23, price: 40000 },
//   { id: 24, price: 50000 },
//   { id: 25, price: 52000 },
//   { id: 26, price: 53000 },
//   { id: 27, price: 55000 },
//   { id: 28, price: 60000 },
//   { id: 29, price: 62000 },
//   { id: 30, price: 63000 },
//   { id: 31, price: 66000 },
//   { id: 32, price: 67000 },
//   { id: 33, price: 68000 },
//   { id: 34, price: 69000 },
//   { id: 35, price: 70000 },
//   { id: 36, price: 70000 },
//   { id: 37, price: 13000 },
//   { id: 38, price: 16000 },
//   { id: 39, price: 21000 },
//   { id: 40, price: 24000 },
//   { id: 41, price: 26000 },
//   { id: 42, price: 29000 },
//   { id: 43, price: 25000 },
//   { id: 44, price: 310000 },
//   { id: 45, price: 35000 },
//   { id: 46, price: 35000 },
//   { id: 47, price: 43000 },
//   { id: 48, price: 49000 },
//   { id: 49, price: 53000 },
//   { id: 50, price: 38000 },
//   { id: 51, price: 42000 },
//   { id: 52, price: 54000 },
//   { id: 53, price: 54000 },
//   { id: 54, price: 54000 },
//   { id: 55, price: 55000 },
//   { id: 56, price: 57000 },
//   { id: 57, price: 58000 },
//   { id: 58, price: 61000 },
//   { id: 59, price: 61000 },
//   { id: 60, price: 61000 },
//   { id: 61, price: 64000 },
//   { id: 62, price: 66000 },
//   { id: 63, price: 68000 },
//   { id: 64, price: 73000 },
//   { id: 65, price: 78000 },
//   { id: 66, price: 79000 },
//   { id: 67, price: 81000 },
//   { id: 68, price: 87000 },
//   { id: 71, price: 88000 },
//   { id: 72, price: 83000 },
//   { id: 73, price: 84500 },
//   { id: 74, price: 85000 },
//   { id: 75, price: 41000 },
//   { id: 76, price: 42000 },
//   { id: 77, price: 53000 },
//   { id: 78, price: 54000 },
//   { id: 79, price: 65000 },
//   { id: 80, price: 31000 },
//   { id: 81, price: 42000 },
//   { id: 82, price: 43000 },
//   { id: 83, price: 47000 },
// ];

// const xNum = 20;

// const obj = {
//   10000: 0,
//   20000: 0,
//   30000: 0,
//   40000: 0,
//   50000: 0,
//   60000: 0,
//   70000: 0,
//   80000: 0,
//   90000: 0,
//   100000: 0,
// };

// for (const accommodation of accommodations) {
//   const t = Math.floor(accommodation.price / 10000) * 10000;
//   if (t <= 100000) obj[t] += 1;
// }

// const max = 14;
// const Base = Math.floor(500 / 14);
// // y 좌표
// // x 좌표는 10000원당 50
// const coord = {};

// for (let num in obj) {
//   const xCoord = (num / 10000) * 50;
//   coord[xCoord] = obj[num] * Base;
// }

// const lastCoord = Object.entries(coord).map((v) => v.map(Number));

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
  [210, 0],
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
