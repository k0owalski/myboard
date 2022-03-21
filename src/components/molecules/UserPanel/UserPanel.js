import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import userIcon from 'img/icon_user.webp';
import notificationsIcon from 'img/icon_notifications.webp';
import settingsIcon from 'img/icon_settings.webp';

const StyledUserPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 3rem 0;

  & > div {
    display: flex;
    gap: 1rem;
  }

  button {
    cursor: pointer;
  }

  .username-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;

    color: inherit;

    .username-name {
      font-weight: 600;

      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

const UserPanel = () => (
  <StyledUserPanel>
    <NavLink to="/users/me" className="username-button">
      <img src={`${userIcon}`} alt="user icon" width={32} height={32} />
      <span className="username-name">Username</span>
    </NavLink>
    <div>
      <button className="notifications-button" type="button">
        <img
          src={`${notificationsIcon}`}
          alt="notifications icon"
          width={32}
          height={32}
        />
      </button>
      <NavLink to="/settings/global" className="settings-button">
        <img
          src={`${settingsIcon}`}
          alt="settingsIcon icon"
          width={32}
          height={32}
        />
      </NavLink>
    </div>
  </StyledUserPanel>
);

export default UserPanel;
