import React, { useReducer } from 'react';
import { CalendarStateContext, CalendarDispatchContext } from './CalendarContext';
import calendarReducer, { initialCalendarState } from './calendarReducer';

const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
  const [calendarState, dispatchCalendar] = useReducer(calendarReducer, initialCalendarState);

  return (
    <CalendarStateContext.Provider value={calendarState}>
      <CalendarDispatchContext.Provider value={dispatchCalendar}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
};

export default CalendarProvider;
