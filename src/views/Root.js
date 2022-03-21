import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import NavBar from 'components/organisms/NavBar/NavBar';
import BoardTasks from './BoardTasks';
import NoBoards from './NoBoards';

const Root = () => {
  // eslint-disable-next-line
  const [boadrs, setBoards] = useState([]);

  return (
    <MainTemplate>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<NoBoards />} />
          <Route path="/boards/:name" element={<BoardTasks />} />
          {/* <Route path="*" element={<NotFoundView />} /> */}
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
