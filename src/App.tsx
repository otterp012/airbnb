import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Backdrop from './components/Backdrop';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

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
      </AppContainer>
    </ThemeProvider>
  </>
);

export default App;
