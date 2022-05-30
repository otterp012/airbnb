import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import MainPage from './pages/MainPage';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

const AppContainer = styled.div`
  position: relative;
  width: 1440px;
  margin: 0 auto;
`;

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppContainer>
        <MainPage />
      </AppContainer>
    </ThemeProvider>
  </>
);

export default App;
