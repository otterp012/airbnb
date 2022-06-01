import React, { useReducer } from 'react';
import { CalendarStateContext, CalendarDispatchContext } from './CalendarContext';
import calendarReducer from './calendarReducer';
import { useSearchDataStateContext } from '../searchDataStore/SearchDataContext';

const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
  const initialCalendarState = useSearchDataStateContext().calendar;
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
