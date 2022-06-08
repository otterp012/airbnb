import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';
import Map from '../components/map/Map';

const SearchPage = () => {
  const { pathname } = useLocation();
  return (
    <SearchPageContainer>
      <Header path={pathname} />
      <CardsMapContainer>
        {/* <Cards /> */}
        {/* <Map /> */}
      </CardsMapContainer>
    </SearchPageContainer>
  );
};

const SearchPageContainer = styled.div`
  width: 1440px;
  height: 100%;
`;

const CardsMapContainer = styled.div`
  position: absolute;
  top: 94px;
  z-index: 2;
  width: calc(100%);
  height: calc(100% - 94px);
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
`;

// 94px -> 서치바가 활성화되면 top 이 190px로 늘어남

export default SearchPage;
