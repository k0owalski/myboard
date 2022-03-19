import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import BoardTasks from './BoardTasks';
import NoBoards from './NoBoards';

const Root = () => {
  // eslint-disable-next-line
  const [boadrs, setBoards] = useState([]);

  return (
    <MainTemplate>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NoBoards />} />
          <Route path="/boards/:id" element={<BoardTasks />} />
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
