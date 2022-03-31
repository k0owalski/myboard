import BoardMenuItem from 'components/atoms/BoardMenuItem/BoardMenuItem';
import React from 'react';

import StyledBoardMenu from 'components/molecules/BoardMenu/StyledBoardMenu';
import icon from 'img/icon_chat.webp';

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
