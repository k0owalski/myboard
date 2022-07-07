import styled from 'styled-components';

const StyledNavBar = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content) 1fr repeat(2, max-content);

  padding: 3rem;

  background-color: #f4f4f4;
  box-shadow: 0px 0px 24px -8px #463854;

  .logo {
    width: 100%;
  }

  .new-board-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin: 3rem 0 0;
  }

  footer {
    font-size: 0.75rem;
    font-weight: 300;
  }
`;

export default StyledNavBar;
