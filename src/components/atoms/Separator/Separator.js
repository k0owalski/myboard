import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSeparator = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  height: max-content;

  .separatorLabel {
    font-weight: 300;

    color: ${({ theme: { colors } }) => colors.primary};
  }

  .separatorLine {
    margin-block-start: 0;
    margin-block-end: 0;

    border: none;
    border-top: 1px solid ${({ theme: { colors } }) => colors.primary};

    opacity: 0.5;
  }
`;

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
