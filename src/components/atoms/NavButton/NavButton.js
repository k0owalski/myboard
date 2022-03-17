import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  height: 2.5rem;

  margin: 3rem 0 0;

  font-family: inherit;
  font-weight: 500;

  color: ${({ theme: { colors } }) => colors.primary};
  background-color: none;

  border: 2px solid ${({ theme: { colors } }) => colors.primary};
  border-radius: 0.25rem;

  user-select: none;
  cursor: pointer;

  ${({ alternative }) =>
    alternative &&
    css`
      margin: 1rem 0 0;

      color: ${({ theme: { colors } }) => colors.background};
      background-color: ${({ theme: { colors } }) => colors.primary};
    `}
`;

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
