import BoardMenu from 'components/molecules/BoardMenu/BoardMenu';
import React from 'react';
import styled from 'styled-components';

const StyledBoardTasks = styled.main`
  display: grid;
  grid-template-columns: 60rem 1fr;
  grid-auto-rows: max-content;

  padding: 2.5rem 4rem;
`;

const BoardTasks = () => (
  <StyledBoardTasks>
    <BoardMenu />
  </StyledBoardTasks>
);

export default BoardTasks;
