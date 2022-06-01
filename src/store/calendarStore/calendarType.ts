import { Dispatch } from 'react';

export type CalendarStateType = {
  checkIn: Date | null;
  checkOut: Date | null;
  hoveredDate: Date | null;
};

export type CalendarActionType =
  | { type: 'CHECK_IN'; payload: Date }
  | { type: 'CHECK_OUT'; payload: Date }
  | { type: 'HOVER'; payload: Date | null }
  | { type: 'DELETE'; payload: null };

export type CalendarDispatchType = Dispatch<CalendarActionType>;
