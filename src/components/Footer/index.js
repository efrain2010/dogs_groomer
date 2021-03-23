import React from 'react';

import { StyledFooter, StyledFigure, StyledAddressText, StyledInfoBox, DesignedBy } from './styles';

import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFigure>
        <img src={logo} alt="CALUDOB logotipo" />
        <h2>CALUDOB</h2>
        <h3>Dog Spa & Walks</h3>

        <StyledAddressText><a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/B9rSx3Tw9496bbKr8">Javier Barros Sierra #444<br/> Chetumal, Q. Roo</a></StyledAddressText>

        <StyledInfoBox>
          <a href="tel:9871375114">Teléfono<br/>987 137 5114</a>
        </StyledInfoBox>
      </StyledFigure>
      <DesignedBy>
        <h4><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/efrain-villanueva/">Diseñado y desarrollado por Efraín Villanueva</a></h4>
      </DesignedBy>
    </StyledFooter>
  )
}

export default Footer;