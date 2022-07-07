import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import UserContext from 'contexts/UserContext';
import StyledUserPanel from 'components/molecules/UserPanel/StyledUserPanel';
import userIcon from 'img/icon_user.webp';
import notificationsIcon from 'img/icon_notifications.webp';
import settingsIcon from 'img/icon_settings.webp';

const UserPanel = () => {
  const {userData} = useContext(UserContext);

  return (
    <StyledUserPanel>
      <NavLink to="/users/me" className="username-button">
        <img src={`${userIcon}`} alt="user icon" width={24} height={24} />
        <span className="username-name">{userData.name}</span>
      </NavLink>
      <div>
        <button className="notifications-button" type="button">
          <img
            src={`${notificationsIcon}`}
            alt="notifications icon"
            width={24}
            height={24}
          />
        </button>
        <NavLink to="/settings/global" className="settings-button">
          <img
            src={`${settingsIcon}`}
            alt="settings icon"
            width={24}
            height={24}
          />
        </NavLink>
      </div>
    </StyledUserPanel>
  )
};

export default UserPanel;
