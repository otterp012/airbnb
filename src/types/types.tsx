import { Dispatch } from 'react';

export type ModalType = 'CALENDAR' | 'PRICE' | 'PERSONNEL' | null;

export type CalendarStateType = {
  checkIn: Date | null;
  checkOut: Date | null;
  hoveredDate: Date | null;
};

export type PersonnelType = 'ADULT' | 'CHILD' | 'INFANT';

export type PersonnelStateType = {
  ADULT: number;
  CHILD: number;
  INFANT: number;
};

export type PersonnelActionType =
  | { type: 'INCREASE'; payload: PersonnelType }
  | { type: 'DECREASE'; payload: PersonnelType };

export type PersonnelContextType = {
  personnel: PersonnelStateType;
  dispatchPersonnel: Dispatch<PersonnelActionType>;
};

export type PersonnelSelectOptionType = {
  target: PersonnelType;
  title: string;
  description: string;
};
