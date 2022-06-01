export type YearMonthType = {
  year: number;
  month: number;
};

const isValidDate = (date: Date | null) => date instanceof Date;

const isTwoDateSame = (date1: Date, date2: Date) => {
  return date1?.toLocaleDateString() === date2?.toLocaleDateString();
};

const getCurrentYearMonth = (): YearMonthType => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  return {
    year,
    month,
  };
};

const isDateBigger = (date1: Date | null) => (date2: Date | null) => {
  const baseDate = date1;
  const comparedDate = date2;

  if (baseDate > comparedDate) return true;
  return false;
};

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

const calYearMonth =
  (baseYearMonth: YearMonthType) => (changedMonth: number) => {
    let tempYear = baseYearMonth.year;
    let tempMonth = baseYearMonth.month + changedMonth;
    if (tempMonth <= 0) {
      tempYear -= 1;
      tempMonth += 12;
    } else if (tempMonth >= 13) {
      tempMonth -= 12;
      tempYear += 1;
    }

    return { year: tempYear, month: tempMonth };
  };

const getIsPast = (now, target) => {
  if (target >= now) return false;
  if (isTwoDateSame(target, now)) return false;
  return true;
};

export {
  getCurrentYearMonth,
  getFirstDayIdx,
  getLastDate,
  splitDatesToWeeks,
  calYearMonth,
  isValidDate,
  isTwoDateSame,
  isDateBigger,
  getIsPast,
};
