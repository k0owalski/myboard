import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Separator from 'components/atoms/Separator/Separator';

const StyledBoardList = styled.div`
  width: 100%;

  margin: 3rem 0 0;

  .boardList {
    margin: 1rem 0 0;

    .boardLink {
      display: block;

      margin: 0 0 0.5rem;

      font-family: inherit;
      font-weight: 300;

      text-decoration: none;

      color: inherit;
      background: none;

      border: none;

      cursor: pointer;

      &.active {
        font-weight: 600;
      }
    }
  }
`;

const BoardList = () => {
  const boards = [
    'Algebra z geometria',
    'Analiza matematyczna',
    'Angielski C1',
    'Podstawy fizyki dla informatyki',
    'Wstep do programowania',
  ];

  return (
    <StyledBoardList>
      <Separator label="Boards" />
      <nav className="boardList">
        {boards.map((board) => (
          <NavLink
            to={`/boards/${board.toLowerCase().replaceAll(' ', '-')}`}
            className={`boardLink ${({ isActive }) => isActive ?? 'active'}`}
            key={board}
          >
            {board}
          </NavLink>
        ))}
      </nav>
    </StyledBoardList>
  );
};

export default BoardList;
