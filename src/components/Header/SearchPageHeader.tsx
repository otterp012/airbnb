import React, { useState } from 'react';
import styled from 'styled-components';
import MiniSearchBar from '@components/SerachBar/MiniSearchBar';
import SearchBar from '@components/SerachBar/SearchBar';
import HeaderLogo from './HeaderLogo';
import HeaderGNB from './HeaderGNB';
import HeaderSideMenu from './HeaderSideMenu';

const SearchPageHeader = () => {
  const [extended, setExtended] = useState(false);

  return (
    <HeaderContainer>
      <HeaderBase>
        <HeaderLogo logoText='OL-BNB' />
        {extended ? <HeaderGNB /> : <MiniSearchBar onClick={() => setExtended(true)} />}
        <HeaderSideMenu />
      </HeaderBase>
      {extended && <SearchBar pageType='SEARCH' buttonClickHandler={() => setExtended(false)} />}
    </HeaderContainer>
  );
};
export default SearchPageHeader;

const HeaderContainer = styled.div`
  width: calc(1440px - 160px);
  padding: 0px 80px 24px 80px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderBase = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')};
  height: 94px;
`;
