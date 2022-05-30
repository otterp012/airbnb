import React, { useState } from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SerachBar/SearchBar';
import CalendarProvider from '../store/CalendarProvider';
import Container from '../UI/Container';

type ModalType = 'CALENDAR' | 'PRICE' | 'PERSONNEL' | null;

const MainPage = () => {
  const initialOpendedModal: ModalType = null;
  const [openedModalType, setOpenedModalType] = useState(initialOpendedModal);

  const switchModalType = (type: ModalType) => {
    setOpenedModalType(type);
  };

  return (
    <Container flexInfo={['column', 'center', 'center', 'no-wrap']}>
      <Header switchModalType={switchModalType} />
      <CalendarProvider>
        <SearchBar openedModalType={openedModalType} switchModalType={switchModalType} />
      </CalendarProvider>
    </Container>
  );
};

export default MainPage;
