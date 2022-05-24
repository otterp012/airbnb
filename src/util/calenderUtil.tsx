const getFirstDayIdx = (year: number, month: number): number => {
  const firstDate = new Date(year, month - 1, 1);
  return firstDate.getDay();
};

const getLastDate = (year: number, month: number): number => {
  const lastDate = new Date(year, month, 0);
  return lastDate.getDate();
};

export { getFirstDayIdx, getLastDate };
