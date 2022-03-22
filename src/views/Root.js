import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import NavBar from 'components/organisms/NavBar/NavBar';
import BoardTasks from './BoardTasks';
import NoBoards from './NoBoards';

const Root = () => {
  // eslint-disable-next-line
  const [boards, setBoards] = useState([
    {
      id: 0,
      name: 'Algebra z geometria',
      admin: '', // board creator
      moderators: [], // just IDs -- person with this role is able to modify board options
    },
    {
      id: 1,
      name: 'Analiza matematyczna',
      admin: '', // board creator
      moderators: [], // just IDs -- person with this role is able to modify board options
    },
  ]);

  // eslint-disable-next-line
  const [tasks, setTasks] = useState([
    {
      id: 0,
      name: 'task name goes here...',
      status: 'waiting-for-client',
      boardID: 0,
      users: [], // just IDs
      isDone: false,
      timeEstimation: 0, // estimation of time needed to finish the task (in hours) -- everyone attached to the task can change it, but rest of team will be able to see who and when changed the estimated time
      timeElapsed: 0, // user can pass a value of hours spent on the task
    },
    {
      id: 1,
      name: 'task name goes here...',
      status: 'waiting-for-client',
      boardID: 1,
      users: [], // just IDs
      isDone: false,
      timeEstimation: 0, // estimation of time needed to finish the task (in hours) -- everyone attached to the task can change it, but rest of team will be able to see who and when changed the estimated time
      timeElapsed: 0, // user can pass a value of hours spent on the task
    },
  ]);

  // eslint-disable-next-line
  const [comments, setComments] = useState([
    {
      id: 0,
      user: 'username',
    },
  ]);

  return (
    <MainTemplate>
      <BrowserRouter>
        <NavBar boards={boards} />
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
