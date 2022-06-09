import React from 'react';
import styled from 'styled-components';

const HeaderLogo = ({ logoText }: { logoText: string }) => (
  <LogoContainer>{logoText}</LogoContainer>
);

export default HeaderLogo;

const LogoContainer = styled.h1`
  font-size: 32px;
  font-weight: 900;
`;
