import { createContext } from 'react';
import { PersonnelContextType } from '../../types/types';

const PersonnelContext = createContext<PersonnelContextType | null>(null);

export default PersonnelContext;
