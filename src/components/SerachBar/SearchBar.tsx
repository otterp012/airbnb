import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Period from './Period';
import Price from './Price';
import Personnel from './Personnel';
import CalendarModal from '../calendar/CalendarModal';

type ModalType = 'CALENDAR' | 'PRICE' | 'PERSONNEL' | null;

const SearchBar = ({ openedModalType, switchModalType }) => (
  <SearchBarContainer>
    <Period switchModalType={switchModalType} />
    <Price switchModalType={switchModalType} />
    <Personnel switchModalType={switchModalType} />
    <SearchButton>
      <SearchIcon />
      <span>검색</span>
    </SearchButton>
    {openedModalType === 'CALENDAR' && <CalendarModal />}
  </SearchBarContainer>
);

const SearchBarContainer = styled.form`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-around')};
  width: 916px;
  height: 76px;
  padding: 0 16px;
  border-radius: 60px;
  background: ${({ theme }) => theme.colors.white};
  -webkit-user-select: none;
  box-shadow: ${({ theme }) => theme.boxShadow.noraml};
`;

const SearchButton = styled.div`
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

export default SearchBar;
