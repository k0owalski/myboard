import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import UserContext from 'contexts/UserContext';
import StyledBoardList from 'components/molecules/BoardList/StyledBoardList';
import Separator from 'components/atoms/Separator/Separator';

const BoardList = () => {
  const {userData: {boards}} = useContext(UserContext);

  return (
    <StyledBoardList>
      <Separator label="Boards" />
      <ul className="board-list">
        {boards.map(({ id, name }) => (
          <li key={id}>
            <NavLink
              to={`/boards/${name.toLowerCase().replaceAll(' ', '-')}`}
              className={`board-link ${({ isActive }) => isActive ?? 'active'}`}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledBoardList>
  );
};

export default BoardList;
