type weekDay = 'SUN' | 'MON' | 'TUE' | 'WED' | 'THR' | 'FRI' | 'SAT';

const getFirstDay = (year: number, month: number): weekDay => {
    const week: weekDay[] = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
    const firstDate = new Date(`${year} ${month}`);
    return week[firstDate.getDay()];
  };

  const getLastDate = (year: number, month: number): number =>
    new Date(year, month, 0).getDate();