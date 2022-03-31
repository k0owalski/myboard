import React from 'react';
import { NavLink } from 'react-router-dom';

import StyledUserPanel from 'components/molecules/UserPanel/StyledUserPanel';
import userIcon from 'img/icon_user.webp';
import notificationsIcon from 'img/icon_notifications.webp';
import settingsIcon from 'img/icon_settings.webp';

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
