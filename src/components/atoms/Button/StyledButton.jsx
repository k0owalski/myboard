import styled, { css } from 'styled-components';

const StyledNavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

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
      color: ${({ theme: { colors } }) => colors.background};
      background-color: ${({ theme: { colors } }) => colors.primary};
    `}
`;

export default StyledNavButton;
