import { createContext, useContext } from 'react';
import { CalendarStateType, CalendarDispatchType } from './calendarType';

export const CalendarStateContext = createContext<CalendarStateType | null>(null);
export const CalendarDispatchContext = createContext<CalendarDispatchType | null>(null);

export const useCalendarStateContext = () => {
  const calendarState = useContext(CalendarStateContext);
  if (!calendarState) throw new Error('Cannot use Calendar provider');
  return calendarState;
};

export const useCalendarDispatchContext = () => {
  const dispatchCalendar = useContext(CalendarDispatchContext);
  if (!dispatchCalendar) throw new Error('Cannot use Calendar provider');
  return dispatchCalendar;
};
