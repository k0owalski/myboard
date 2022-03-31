import styled from 'styled-components';

const StyledUserPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 3rem 0;

  & > div {
    display: flex;
    gap: 1rem;
  }

  button {
    cursor: pointer;
  }

  .username-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;

    color: inherit;

    .username-name {
      font-weight: 600;

      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

export default StyledUserPanel;
