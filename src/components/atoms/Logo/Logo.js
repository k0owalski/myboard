import React from 'react';
import styled from 'styled-components';

import logo from 'img/Logo.webp';

const StyledLogo = styled.img`
  width: 100%;

  aspect-ratio: 224 / 53;

  user-select: none;
`;

const Logo = () => (
  <StyledLogo src={`${logo}`} alt="Logo" width={224} height={53} />
);

export default Logo;
