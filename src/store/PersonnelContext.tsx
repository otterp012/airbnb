import React, { createContext, Dispatch } from 'react';
import { PersonnelStateType } from '../types/types';

type PersonnelContextType = {
  personnel: PersonnelStateType;
  dispatchPersonnel: Dispatch<React.SetStateAction<PersonnelStateType>>;
};

const PersonnelContext = createContext<PersonnelContextType | null>(null);

export default PersonnelContext;
