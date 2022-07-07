import styled from 'styled-components';

const StyledBoardList = styled.nav`
  width: 100%;

  margin: 3rem 0 0;

  .board-list {
    margin: 1rem 0 0;

    list-style-type: none;

    .board-link {
      display: block;

      margin: 0 0 0.5rem;

      font-family: inherit;
      font-weight: 300;

      text-decoration: none;

      color: inherit;
      background: none;

      border: none;

      cursor: pointer;

      &.active {
        font-weight: 600;
      }
    }
  }
`;

export default StyledBoardList;
