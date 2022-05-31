import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SerachBar/SearchBar';
import CalendarProvider from '../store/CalendarProvider';
import PersonnelProvider from '../store/PersonnelProvider';
import Container from '../UI/Container';

const MainPage = () => (
  <Container flexInfo={['column', 'center', 'center', 'no-wrap']}>
    <Header />
    <CalendarProvider>
      <PersonnelProvider>
        <SearchBar />
      </PersonnelProvider>
    </CalendarProvider>
  </Container>
);

export default MainPage;
