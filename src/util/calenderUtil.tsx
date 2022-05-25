const getFirstDayIdx = (year: number, month: number): number => {
  const firstDate = new Date(year, month - 1, 1);
  return firstDate.getDay();
};

const getLastDate = (year: number, month: number): number => {
  const lastDate = new Date(year, month, 0);
  return lastDate.getDate();
};

const splitDatesToWeeks = (firstDayIdx: number, lastDate: number) => {
  const weeks = [];
  let week = [];

  for (let i = 1 - firstDayIdx; i <= lastDate; i += 1) {
    week.push(i);
    if ((firstDayIdx + i) % 7 === 0) {
      weeks.push(week);
      week = [];
    }
    if (i === lastDate) weeks.push(week);
  }
  return weeks;
};

export { getFirstDayIdx, getLastDate, splitDatesToWeeks };
