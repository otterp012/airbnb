import React from 'react';
import Header from '../components/Header/Header';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SerachBar/SearchBar';
import CalendarProvider from '../store/calendarStore/CalendarProvider';
import PersonnelProvider from '../store/personnelStore/PersonnelProvider';
import PriceProvider from '../store/priceStore/PriceProvider';
import Container from '../UI/Container';

const MainPage = () => {
  const { pathname } = useLocation();
  return (
    <Container flexInfo={['column', 'center', 'center', 'no-wrap']}>
      <Header path={pathname} />
      <CalendarProvider>
        <PersonnelProvider>
          <PriceProvider>
            <SearchBar path={pathname} />
          </PriceProvider>
        </PersonnelProvider>
      </CalendarProvider>
    </Container>
  );
};

export default MainPage;
