import React, { createContext, Dispatch } from 'react';
import { CalendarStateType } from '../../types/types';

type CalendarContextType = {
  checkedDate: CalendarStateType;
  dispatchCheckedDate: Dispatch<React.SetStateAction<Date>>;
};

const CalendarContext = createContext<CalendarContextType | any>(null);

export default CalendarContext;
