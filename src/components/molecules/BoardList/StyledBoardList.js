import styled from 'styled-components';

const StyledBoardList = styled.div`
  width: 100%;

  margin: 3rem 0 0;

  .boardList {
    margin: 1rem 0 0;

    .boardLink {
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
