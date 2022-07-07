import React from 'react';
import styled from 'styled-components';

import icon from 'img/icon_noboards.webp';

const StyledNoBoards = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 0.5;

  .noboards-sentence {
    max-width: 80%;

    margin: 1.5rem 0 0.5rem;

    font-size: 2rem;
    font-weight: 600;
  }

  .noboards-hint {
    width: 40rem;
    max-width: 80%;

    font-size: 1.25rem;

    text-align: center;
  }
`;

const NoBoards = () => (
  <StyledNoBoards>
    <img className="noboards-icon" src={`${icon}`} alt="noboards icon" />
    <span className="noboards-sentence">It&apos;s a little empty here...</span>
    <span className="noboards-hint">
      Choose a board using menu on left, create new board or join an existing
      one
    </span>
  </StyledNoBoards>
);

export default NoBoards;
