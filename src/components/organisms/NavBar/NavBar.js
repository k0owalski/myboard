import React from 'react';
import styled from 'styled-components';

import Logo from 'components/atoms/Logo/Logo';
import NavButton from 'components/atoms/NavButton/NavButton';
import BoardList from 'components/molecules/BoardList/BoardList';
import UserPanel from 'components/molecules/UserPanel/UserPanel';

import enterIcon from 'img/icon_enter.webp';
import plusIcon from 'img/icon_plus.webp';

const StyledNavBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content) 1fr repeat(2, max-content);

  padding: 3rem;

  background-color: #f4f4f4;
  box-shadow: 0px 0px 24px -8px #463854;

  footer {
    font-size: 0.75rem;
    font-weight: 300;
  }
`;

const NavBar = () => (
  <StyledNavBar>
    <Logo />
    <NavButton icon={`${enterIcon}`}>Join Board</NavButton>
    <NavButton icon={`${plusIcon}`} alternative>
      Create new board
    </NavButton>
    <BoardList />
    <UserPanel />
    <footer>
      2022 &copy; myBoard by KKdesign.
      <br />
      All rights reserved.
    </footer>
  </StyledNavBar>
);

export default NavBar;
