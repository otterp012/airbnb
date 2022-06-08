import React from 'react';
import styled, { css } from 'styled-components';
import HeaderBackdrop from './HeaderBackdrop';
import HeaderGNB from './HeaderGNB';
import HeaderSideMenu from './HeaderSideMenu';
import SearchBar from '../SerachBar/SearchBar';
import PATH_NAME from '../../constants/pathnames';

const Header = ({ path }: { path: string }) => {
  const { MAIN, SEARCH } = PATH_NAME;
  return (
    <>
      <HeaderContainer path={path}>
        <Logo>OL-bnb</Logo>
        <HeaderGNB />
        <HeaderSideMenu />
        {path === MAIN && <HeaderBackdrop />}
      </HeaderContainer>
      {/* {path === SEARCH && <SearchBar path={path} />} */}
    </>
  );
};

export default Header;

const HeaderContainer = styled.div<{ path: string }>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')};
  width: calc(1440px - 160px);
  padding: 0 80px;
  height: 94px;
  ${({ path }) =>
    path === '/search' &&
    css`
      background: black;
    `};
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 900;
`;
