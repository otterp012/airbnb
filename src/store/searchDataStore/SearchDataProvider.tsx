import React, { useState } from 'react';
import {
  SearchDataStateContext,
  SearchDataDispatchContext,
  SearchDataStateType,
} from './SearchDataContext';
import { initialCalendarState, initialPriceState, initialPersonnelState } from '../initialValues';

const initialSearchData: SearchDataStateType = {
  calendar: initialCalendarState,
  price: initialPriceState,
  personnel: initialPersonnelState,
};

const SearchDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchData, setSearchData] = useState(initialSearchData);

  return (
    <SearchDataStateContext.Provider value={searchData}>
      <SearchDataDispatchContext.Provider value={setSearchData}>
        {children}
      </SearchDataDispatchContext.Provider>
    </SearchDataStateContext.Provider>
  );
};

export default SearchDataProvider;
