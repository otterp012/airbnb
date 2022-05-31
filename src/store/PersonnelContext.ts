import { createContext, Dispatch } from 'react';
import { PersonnelStateType } from '../types/types';
import { PersonnelActionType } from './personnelReducer';

type PersonnelContextType = {
  personnel: PersonnelStateType;
  dispatchPersonnel: Dispatch<PersonnelActionType>;
};

const PersonnelContext = createContext<PersonnelContextType | null>(null);

export default PersonnelContext;
