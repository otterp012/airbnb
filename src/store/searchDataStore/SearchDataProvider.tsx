import React, { useState } from 'react';
import { SearchDataStateContext, SearchDataDispatchContext } from './SearchDataContext';
import { SearchDataStateType } from './SearchDataContext';

const initialSearchData: SearchDataStateType = {
  calendar: {
    checkIn: null,
    hoveredDate: null,
    checkOut: null,
  },
  price: {
    minPrice: null,
    maxPrice: null,
  },
  personnel: {
    ADULT: 0,
    CHILD: 0,
    INFANT: 0,
  },
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
