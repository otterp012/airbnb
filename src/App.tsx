import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Backdrop from './components/Header/Backdrop';
import Header from './components/Header/Header';
import SearchBar from './components/SerachBar/SearchBar';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';
import CalendarModal from './components/calendar/CalendarModal';

const AppContainer = styled.div`
  position: relative;
  width: 1440px;
  margin: 0 auto;
  ${(props) => props.theme.mixin.flexMixin('column', 'center', 'center')}
`;

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Backdrop />
        <Header />
        <SearchBar />
        <CalendarModal />
      </AppContainer>
    </ThemeProvider>
  </>
);

export default App;
