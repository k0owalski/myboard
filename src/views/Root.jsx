import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import UserContext from 'contexts/UserContext';
import GlobalStyle from 'theme/GlobalStyle';
import MainTheme from 'theme/MainTheme';
import NavBar from 'components/organisms/NavBar/NavBar';
import BoardTasks from './BoardTasks';
import NoBoards from './NoBoards';

const Root = () => {
  const [userData, setUserData] = useState({
    id: '001',
    name: 'kowalski',
    boards: [
      { id: '001', name: 'Algebra z geometria' },
      { id: '002', name: 'Analiza matematyczna' },
    ]
  });

  return (
    <UserContext.Provider value={useMemo(() => ({ userData, setUserData }), [userData])}>
      <GlobalStyle />
      <ThemeProvider theme={MainTheme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<NoBoards />} />
            <Route path="/boards/:name" element={<BoardTasks />} />
            {/* <Route path="*" element={<NotFoundView />} /> */}
          </Routes>
          {false && userData /* Need to delete this later */}
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  )
};

export default Root;
