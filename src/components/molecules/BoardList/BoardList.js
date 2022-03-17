import React from 'react';
import styled from 'styled-components';
import Separator from 'components/atoms/Separator/Separator';

const StyledBoardList = styled.div`
  width: 100%;

  margin: 3rem 0 0;

  .boardList {
    margin: 1rem 0 0;

    .boardName {
      margin: 0 0 0.5rem;

      font-family: inherit;
      font-weight: 300;

      background: none;

      border: none;

      cursor: pointer;
    }
  }
`;

const BoardList = () => {
  const boards = [
    'Algebra z geometrią',
    'Analiza matematyczna',
    'Angielski C1',
    'Podstawy fizyki dla informatyki',
    'Wstęp do programowania',
  ];

  return (
    <StyledBoardList>
      <Separator label="Boards" />
      <nav className="boardList">
        {boards.map((board) => (
          <button
            onClick={() => null}
            type="button"
            className="boardName"
            key={board}
          >
            {board}
          </button>
        ))}
      </nav>
    </StyledBoardList>
  );
};

export default BoardList;
