import { Dispatch } from 'react';

export type PersonnelType = 'ADULT' | 'CHILD' | 'INFANT';

export type PersonnelStateType = {
  ADULT: number;
  CHILD: number;
  INFANT: number;
};

export type PersonnelActionType =
  | { type: 'INCREASE'; payload: PersonnelType }
  | { type: 'DECREASE'; payload: PersonnelType }
  | { type: 'DELETE' };

export type PersonnelDispatchType = Dispatch<PersonnelActionType>;

export type PersonnelSelectOptionType = {
  target: PersonnelType;
  title: string;
  description: string;
};
