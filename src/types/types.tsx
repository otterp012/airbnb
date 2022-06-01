import { Dispatch } from 'react';

export type ModalType = 'CALENDAR' | 'PRICE' | 'PERSONNEL' | null;

export type CalendarStateType = {
  checkIn: Date | null;
  checkOut: Date | null;
  hoveredDate: Date | null;
};
