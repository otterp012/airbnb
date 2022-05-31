import React, { useReducer, useMemo } from 'react';
import PersonnelContext from './PersonnelContext';
import personnelReducer, { initialPersonnelState } from './personnelReducer';

const PersonnelProvider = ({ children }: { children: React.ReactNode }) => {
  const [personnel, dispatchPersonnel] = useReducer(personnelReducer, initialPersonnelState);

  const personnelValue = useMemo(
    () => ({
      personnel,
      dispatchPersonnel,
    }),
    [personnel],
  );

  return <PersonnelContext.Provider value={personnelValue}>{children}</PersonnelContext.Provider>;
};

export default PersonnelProvider;
