import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import SearchDataProvider from './store/searchDataStore/SearchDataProvider';
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
        <SearchDataProvider>
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<MainPage />} />
                <Route path="search" element={<SearchPage />} />
              </Route>
            </Routes>
          </Router>
        </SearchDataProvider>
      </AppContainer>
    </ThemeProvider>
  </>
);

export default App;
