import React, { useState } from 'react';

import StyledNavBar from 'components/organisms/NavBar/StyledNavBar';
import Button from 'components/atoms/Button/Button';
import BoardList from 'components/molecules/BoardList/BoardList';
import UserPanel from 'components/molecules/UserPanel/UserPanel';
import SingleFieldPopup from 'components/molecules/SingleFieldPopup/SingleFieldPopup';

import logo from 'img/Logo.webp';
import joinBoardIcon from 'img/icon_join_board.webp';
import addBoardIcon from 'img/icon_add_board.webp';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isJoining, setIsJoining] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  return (
    <StyledNavBar>
      <NavLink to='/' end>
        <img className='logo' src={logo} alt='myBoard logo' />
      </NavLink>
      <div className='new-board-buttons'>
        <Button icon={`${joinBoardIcon}`} title='Join a board' width='100%' height='2.5rem' handleClick={() => setIsJoining((prev) => !prev)} />
        <Button icon={`${addBoardIcon}`} title='Create a new board' width='100%' height='2.5rem' handleClick={() => setIsCreating((prev) => !prev)} alternative />
      </div>
      <BoardList />
      <UserPanel />
      <footer>2022 &copy; myBoard by KKdesign. All rights reserved.</footer>
      {isJoining &&
        <SingleFieldPopup title="Enter the board code" successButtonLabel="Join" handleSuccess={null} handleCancel={() => setIsJoining((prev) => !prev)} />
      }
      {isCreating &&
        <SingleFieldPopup title="Name your new board" successButtonLabel="Create" handleSuccess={null} handleCancel={() => setIsCreating((prev) => !prev)} />
      }
    </StyledNavBar>
  )
};

export default NavBar;
