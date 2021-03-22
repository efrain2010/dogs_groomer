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
        <h2>Dándole a a tu mascota el mejor trato por que sabemos que es un miembro más de la familia</h2>
      </div>
    </StyledContainer>
  )
}

export default Hero;
