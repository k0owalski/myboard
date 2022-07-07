import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from 'components/atoms/Button/StyledButton';

const Button = ({ icon, title, width, height, alternative, handleClick }) => (
  <StyledButton
    type="button"
    width={width}
    height={height}
    alternative={alternative}
    onClick={handleClick}
  >
    {icon && <img src={`${icon}`} alt="icon" width={20} height={20} />}
    {title && <span>{title}</span>}
  </StyledButton>
);

export default Button;

Button.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alternative: PropTypes.bool,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  icon: null,
  title: null,
  width: null,
  height: null,
  alternative: false,
  handleClick: null
};
