import React from 'react';
import PropTypes from 'prop-types';

import StyledSeparator from 'components/atoms/Separator/StyledSeparator';

const Separator = ({ label }) => (
  <StyledSeparator>
    <span className="separatorLabel">{label}</span>
    <hr className="separatorLine" />
  </StyledSeparator>
);

export default Separator;

Separator.propTypes = {
  label: PropTypes.string.isRequired,
};
