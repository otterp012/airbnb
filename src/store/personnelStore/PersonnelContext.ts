import { createContext, useContext } from 'react';
import { PersonnelStateType, PersonnelDispatchType } from './personnelTypes';

export const PersonnelStateContext = createContext<PersonnelStateType | null>(null);
export const PersonnelDispatchContext = createContext<PersonnelDispatchType | null>(null);

export const usePersonnelStateContext = () => {
  const personnelState = useContext(PersonnelStateContext);
  if (!personnelState) throw new Error('Cannot use Personnel provider.');
  return personnelState;
};

export const usePersonnelDispatchContext = () => {
  const dispatchPersonnel = useContext(PersonnelDispatchContext);
  if (!dispatchPersonnel) throw new Error('Cannot use Personnel provider.');
  return dispatchPersonnel;
};
