import React from 'react';

import StyledLogo from 'components/atoms/Logo/StyledLogo';
import logo from 'img/Logo.webp';

const Logo = () => (
  <StyledLogo src={`${logo}`} alt="Logo" width={224} height={53} />
);

export default Logo;
