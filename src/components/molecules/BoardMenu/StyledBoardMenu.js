import styled from 'styled-components';

const StyledBoardMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content) 1fr min-content;
  grid-column: 1 / -1;
  gap: 4rem;
`;

export default StyledBoardMenu;
