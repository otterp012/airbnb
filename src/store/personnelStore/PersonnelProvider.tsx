import React, { useReducer } from 'react';
import { PersonnelStateContext, PersonnelDispatchContext } from './PersonnelContext';
import personnelReducer, { initialPersonnelState } from './personnelReducer';

const PersonnelProvider = ({ children }: { children: React.ReactNode }) => {
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
