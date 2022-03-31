import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import StyledBoardList from 'components/molecules/BoardList/StyledBoardList';
import Separator from 'components/atoms/Separator/Separator';

const BoardList = ({ boards }) => (
  <StyledBoardList>
    <Separator label="Boards" />
    <nav className="boardList">
      {boards.map(({ name }) => (
        <NavLink
          to={`/boards/${name.toLowerCase().replaceAll(' ', '-')}`}
          className={`boardLink ${({ isActive }) => isActive ?? 'active'}`}
          key={name}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  </StyledBoardList>
);

export default BoardList;

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
