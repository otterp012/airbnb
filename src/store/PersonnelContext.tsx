import React, { createContext, Dispatch } from 'react';
import { PersonnelStateType } from '../types/types';

type PersonnelContextType = {
  personnelNumbers: PersonnelStateType;
  dispatchPersonnelNumber: Dispatch<React.SetStateAction<number>>;
};

const PersonnelContext = createContext<PersonnelContextType | null>(null);

export default PersonnelContext;
