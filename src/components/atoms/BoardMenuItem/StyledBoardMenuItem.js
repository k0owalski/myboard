import styled, { css } from 'styled-components';

const StyledBoardMenuItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.5rem;
  font-weight: 500;

  opacity: ${({ isActive }) => (isActive ? '0.8' : '0.5')};

  ${({ alternative, theme: { colors } }) =>
    alternative &&
    css`
      grid-column: -2 / -1;

      padding: 0.75rem 1.5rem;

      font-size: 1rem;

      color: ${colors.background};
      background-color: ${colors.primary};

      border-radius: 0.25rem;

      opacity: 1;
    `}
`;

export default StyledBoardMenuItem;
