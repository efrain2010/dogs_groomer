import React from 'react';
import { StyledContainer, StyledFigure } from './styles';

import heroImg from '../../assets/cachorro-tomando-una-ducha-2.jpg';


const Hero = () => {
  return (
    <StyledContainer>
      <StyledFigure>
        <img src={heroImg} alt="cachorro tomando una ducha" />
      </StyledFigure>
      <div>
        <h2>El mejor servicio para tu mascota y algo más</h2>
      </div>
    </StyledContainer>
  )
}

export default Hero;
