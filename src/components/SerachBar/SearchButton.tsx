import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useCalendarStateContext } from '../../store/calendarStore/CalendarContext';
import { usePersonnelStateContext } from '../../store/personnelStore/PersonnelContext';
import { usePriceStateContext } from '../../store/priceStore/PriceContext';
import { useSearchDataDispatchContext } from '../../store/searchDataStore/SearchDataContext';

const SearchButton = () => {
  const dispatchSearchData = useSearchDataDispatchContext();
  const calendarState = useCalendarStateContext();
  const personnelState = usePersonnelStateContext();
  const priceState = usePriceStateContext();

  const collectSearchData = () => {
    const newSearchDataState = {
      calendar: calendarState,
      price: priceState,
      personnel: personnelState,
    };

    return newSearchDataState;
  };

  const handleSearchButtonClick = () => {
    const newSearchData = collectSearchData();
    dispatchSearchData(newSearchData);
  };

  return (
    <Link to="/search" style={{ textDecoration: 'none' }}>
      <SearchButtonWrapper onClick={handleSearchButtonClick}>
        <SearchIcon />
        <span>검색</span>
      </SearchButtonWrapper>
    </Link>
  );
};

export default SearchButton;

const SearchButtonWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')};
  height: 32px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 30px;
  padding: 8px 16px 8px 8px;
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.125rem;
    font-weight: 700;
    margin-left: 5px;
  }
`;
