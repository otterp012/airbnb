import React, { useReducer, useMemo } from 'react';
import CalendarContext from './CalendarContext';
import calendarReducer, { initialCalendarState } from './calendarReducer';

const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
  const [checkedDate, dispatchCheckedDate] = useReducer(
    calendarReducer,
    initialCalendarState,
  );

  const calendarValue = useMemo(
    () => ({
      checkedDate,
      dispatchCheckedDate,
    }),
    [checkedDate],
  );

  return (
    <CalendarContext.Provider value={calendarValue}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
