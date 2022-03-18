import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'theme/GlobalStyle';
import MainTheme from 'theme/MainTheme';
import NavBar from 'components/organisms/NavBar/NavBar';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={MainTheme}>
      <NavBar />
      {children}
    </ThemeProvider>
  </>
);

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
