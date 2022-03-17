import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'theme/GlobalStyle';
import NavBar from 'components/organisms/NavBar/NavBar';
import MainTheme from 'theme/MainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={MainTheme}>
      <NavBar />
    </ThemeProvider>
  </>
);

export default Root;
