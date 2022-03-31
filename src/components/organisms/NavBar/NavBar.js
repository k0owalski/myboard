import React from 'react';
import PropTypes from 'prop-types';

import StyledNavBar from 'components/organisms/NavBar/StyledNavBar';
import Logo from 'components/atoms/Logo/Logo';
import NavButton from 'components/atoms/NavButton/NavButton';
import BoardList from 'components/molecules/BoardList/BoardList';
import UserPanel from 'components/molecules/UserPanel/UserPanel';

import enterIcon from 'img/icon_enter.webp';
import plusIcon from 'img/icon_plus.webp';

const NavBar = ({ boards }) => (
  <StyledNavBar>
    <Logo />
    <NavButton icon={`${enterIcon}`}>Join Board</NavButton>
    <NavButton icon={`${plusIcon}`} alternative>
      Create new board
    </NavButton>
    <BoardList boards={boards} />
    <UserPanel />
    <footer>
      2022 &copy; myBoard by KKdesign.
      <br />
      All rights reserved.
    </footer>
  </StyledNavBar>
);

export default NavBar;

NavBar.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
