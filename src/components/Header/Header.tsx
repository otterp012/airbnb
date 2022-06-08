import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import HeaderBackdrop from './HeaderBackdrop';
import HeaderGNB from './HeaderGNB';
import HeaderSideMenu from './HeaderSideMenu';
import SearchPageSearchBar from '../SerachBar/SearchPageSearchBar';
import PATH_NAME from '../../constants/pathnames';

const Header = ({ path }: { path: string }) => {
  const { MAIN, SEARCH } = PATH_NAME;

  return (
    <HeaderContainer path={path}>
      <Logo>OL-bnb</Logo>
      <HeaderGNB />
      {path === SEARCH && <SearchPageSearchBar />}
      <HeaderSideMenu />
      {path === MAIN && <HeaderBackdrop />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div<{ path: string }>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')};
  width: calc(1440px - 160px);
  padding: 0 80px;
  height: 94px;
  ${({ path }) => path === '/search' && searchPageHeaderCss};
`;

const searchPageHeaderCss = css`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 900;
`;
