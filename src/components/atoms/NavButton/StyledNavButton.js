import styled, { css } from 'styled-components';

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

export default StyledNavButton;
