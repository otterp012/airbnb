import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Period from './Period';
import Price from './Price';
import Personnel from './Personnel';

const SearchBarContainer = styled.form`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-around')};
  width: 916px;
  height: 76px;
  padding: 0 16px;
  border-radius: 60px;
  background: ${({ theme }) => theme.colors.white};
`;

const SearchButton = styled.div`
  heigth: 32px;
  border-radius: 30px;
  padding: 8px 16px 8px 8px;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.orange};

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.125rem;
    font-weight: 700;
    margin-left: 5px;
  }
`;

// price, period, personnel 하나 컴포넌트로 합칠 수 있을 것 같음
const SearchBar = () => (
  <SearchBarContainer>
    <Period />
    <Price />
    <Personnel />
    <SearchButton>
      <SearchIcon />
      <span>검색</span>
    </SearchButton>
  </SearchBarContainer>
);

export default SearchBar;
