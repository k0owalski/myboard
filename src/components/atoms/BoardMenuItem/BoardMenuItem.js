import React from 'react';
import PropTypes from 'prop-types';

import StyledBoardMenuItem from 'components/atoms/BoardMenuItem/StyledBoardMenuItem';

const BoardMenuItem = ({ alternative, children }) => (
  <StyledBoardMenuItem alternative={alternative}>
    {children}
  </StyledBoardMenuItem>
);

export default BoardMenuItem;

BoardMenuItem.propTypes = {
  alternative: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

BoardMenuItem.defaultProps = {
  alternative: false,
};
