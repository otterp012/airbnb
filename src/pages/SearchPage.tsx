import React from 'react';
import { useSearchDataStateContext } from '../store/searchDataStore/SearchDataContext';

const SearchPage = () => {
  const searchDataState = useSearchDataStateContext();
  return (
    <div>
      {`${searchDataState.calendar.checkIn}
    ${searchDataState.calendar.checkOut}
    ${searchDataState.personnel.ADULT}
    ${searchDataState.personnel.CHILD}
    ${searchDataState.personnel.INFANT}`}
    </div>
  );
};
export default SearchPage;
