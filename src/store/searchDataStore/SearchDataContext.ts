import { createContext, useContext, Dispatch } from 'react';
import { CalendarStateType } from '../calendarStore/calendarType';
import { PersonnelStateType } from '../personnelStore/personnelTypes';
// import { PriceStateType } from '../priceStore/priceTypes';

export type SearchDataStateType = {
  calendar: CalendarStateType;
  price: {
    minPrice: number | null;
    maxPrice: number | null;
  };
  personnel: PersonnelStateType;
};

type SearchDataDispatchType = Dispatch<React.SetStateAction<SearchDataStateType>>;

export const SearchDataStateContext = createContext<SearchDataStateType | null>(null);
export const SearchDataDispatchContext = createContext<SearchDataDispatchType | null>(null);

export const useSearchDataStateContext = () => {
  const searchDataState = useContext(SearchDataStateContext);
  if (!searchDataState) throw new Error('cannot use SearchData provider');
  return searchDataState;
};

export const useSearchDataDispatchContext = () => {
  const dispatchSearchData = useContext(SearchDataDispatchContext);
  if (!dispatchSearchData) throw new Error('cannot use SearchData provider');
  return dispatchSearchData;
};
