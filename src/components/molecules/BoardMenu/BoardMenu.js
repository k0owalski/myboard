import BoardMenuItem from 'components/atoms/BoardMenuItem/BoardMenuItem';
import React from 'react';
import styled from 'styled-components';

import icon from 'img/icon_chat.webp';

const StyledBoardMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content) 1fr min-content;
  grid-column: 1 / -1;
  gap: 4rem;
`;

const BoardMenu = () => (
  <StyledBoardMenu>
    <BoardMenuItem>
      <span>Tasks</span>
    </BoardMenuItem>
    <BoardMenuItem>
      <span>Notes</span>
    </BoardMenuItem>
    <BoardMenuItem>
      <span>Activity</span>
    </BoardMenuItem>
    <div />
    <BoardMenuItem alternative>
      <>
        <img src={`${icon}`} alt="Chat icon" />
        <span>Chats</span>
      </>
    </BoardMenuItem>
  </StyledBoardMenu>
);

export default BoardMenu;
