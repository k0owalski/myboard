import React from 'react';
import PropTypes from 'prop-types';

import StyledSeparator from 'components/atoms/Separator/StyledSeparator';

const Separator = ({ label }) => (
  <StyledSeparator>
    <span className="separator-label">{label}</span>
    <hr className="separator-line" />
  </StyledSeparator>
);

export default Separator;

Separator.propTypes = {
  label: PropTypes.string.isRequired,
};
