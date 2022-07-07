import styled from 'styled-components';

const StyledSeparator = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  height: max-content;

  .separator-label {
    font-weight: 300;

    color: ${({ theme: { colors } }) => colors.primary};
  }

  .separator-line {
    margin-block-start: 0;
    margin-block-end: 0;

    border: none;
    border-top: 1px solid ${({ theme: { colors } }) => colors.primary};

    opacity: 0.5;
  }
`;

export default StyledSeparator;
