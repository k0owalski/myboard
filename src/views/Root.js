import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import NoBoards from './NoBoards';

const Root = () => {
  // eslint-disable-next-line
  const [boadrs, setBoards] = useState([]);

  return (
    <MainTemplate>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NoBoards />} />
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
