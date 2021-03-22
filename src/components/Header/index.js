import React from 'react';
import { CtaButton } from '../../global-styles';
import { StyledHeader, StyledLogo, StyledMenu } from './styles';

import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <div className="grid">
        <div className="col-7">
          <StyledLogo>
            <figure>
              <img src={logo} alt="CALUDOB" />
            </figure>
            <div>
              <h2>CALUDOB</h2>
              <h1>Dog Spa & Walks</h1>
            </div>
          </StyledLogo>
        </div>
        <div className="col-5">
          <StyledMenu>
            <div><a href="tel:9871375114">Teléfono: 987 137 5114</a></div>
            <div>
              <CtaButton>
                Book Now
              </CtaButton>
            </div>
          </StyledMenu>
        </div>
      </div>
    </StyledHeader>
  )
}


export default Header;