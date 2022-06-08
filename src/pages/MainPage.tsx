import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import SearchBar from '../components/SerachBar/SearchBar';
import Container from '../UI/Container';

const MainPage = () => {
  const { pathname } = useLocation();
  return (
    <Container flexInfo={['column', 'center', 'center', 'no-wrap']}>
      <Header path={pathname} />
      <SearchBar path={pathname} />
    </Container>
  );
};

export default MainPage;
