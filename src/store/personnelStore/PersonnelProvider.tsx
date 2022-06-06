import React, { useReducer } from 'react';
import { PersonnelStateContext, PersonnelDispatchContext } from './PersonnelContext';
import personnelReducer from './personnelReducer';
import { useSearchDataStateContext } from '../searchDataStore/SearchDataContext';

const PersonnelProvider = ({ children }: { children: React.ReactNode }) => {
  const initialPersonnelState = useSearchDataStateContext().personnel;
  const [personnelState, dispatchPersonnel] = useReducer(personnelReducer, initialPersonnelState);

  return (
    <PersonnelStateContext.Provider value={personnelState}>
      <PersonnelDispatchContext.Provider value={dispatchPersonnel}>
        {children}
      </PersonnelDispatchContext.Provider>
    </PersonnelStateContext.Provider>
  );
};

export default PersonnelProvider;
