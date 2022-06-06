import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SerachBar/SearchBar';
import CalendarProvider from '../store/calendarStore/CalendarProvider';
import PersonnelProvider from '../store/personnelStore/PersonnelProvider';
import PriceProvider from '../store/priceStore/PriceProvider';
import Container from '../UI/Container';

const MainPage = () => (
  <Container flexInfo={['column', 'center', 'center', 'no-wrap']}>
    <Header />
    <CalendarProvider>
      <PersonnelProvider>
        <PriceProvider>
          <SearchBar />
        </PriceProvider>
      </PersonnelProvider>
    </CalendarProvider>
  </Container>
);

export default MainPage;
