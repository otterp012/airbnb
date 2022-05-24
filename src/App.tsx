import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Backdrop from './components/Backdrop';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

const AppContainer = styled.div`
  position: relative;
  width: 1440px;
  margin: 0 auto;
  ${(props) => props.theme.mixin.flexMixin('column', 'center', 'center')}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Backdrop />
          <Header />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
