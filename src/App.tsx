import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import SearchBar from './components/SerachBar/SearchBar';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';
import CalendarProvider from './store/CalendarProvider';

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
        <Header />
        <CalendarProvider>
          <SearchBar />
        </CalendarProvider>
        {/* SearchBar 안에서 Provider 사용과, 이렇게 밖에서 사용하는 것의 차이는 ? */}
      </AppContainer>
    </ThemeProvider>
  </>
);

export default App;
