import React from 'react';
import styled from 'styled-components';
import SearchPageHeader from '../components/Header/SearchPageHeader';
import ReservationModal from '@components/ReservationModal/ReservationModal';
import Cards from '../components/Cards/Cards';
import Map from '../components/map/Map';
import CalendarProvider from '../store/calendarStore/CalendarProvider';
import PersonnelProvider from '../store/personnelStore/PersonnelProvider';
import PriceProvider from '../store/priceStore/PriceProvider';

const SearchPage = () => (
  <CalendarProvider>
    <PriceProvider>
      <PersonnelProvider>
        <SearchPageContainer>
          <SearchPageHeader />
          <ReservationModal />
          {/* <CardsMapContainer>
            <Cards />
            <Map />
          </CardsMapContainer> */}
        </SearchPageContainer>
      </PersonnelProvider>
    </PriceProvider>
  </CalendarProvider>
);
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
