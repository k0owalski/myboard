import React from 'react';
import PropTypes from 'prop-types';

import StyledNavButton from 'components/atoms/NavButton/StyledNavButton';

const NavButton = ({ icon, children, alternative }) => (
  <StyledNavButton alternative={alternative} type="button">
    {icon && <img src={`${icon}`} alt="icon" width={20} height={20} />}
    <span>{children}</span>
  </StyledNavButton>
);

export default NavButton;

NavButton.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
  alternative: PropTypes.bool,
};

NavButton.defaultProps = {
  icon: null,
  alternative: false,
};
