import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SerachBar/SearchBar';
import CalendarProvider from '../store/CalendarProvider';
import Container from '../UI/Container';

const MainPage = () => (
  <Container flexInfo={['column', 'center', 'center', 'no-wrap']}>
    <Header />
    <CalendarProvider>
      <SearchBar />
    </CalendarProvider>
  </Container>
);

export default MainPage;
