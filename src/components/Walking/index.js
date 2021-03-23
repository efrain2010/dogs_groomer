import React from 'react';
import { StyledFigure, StyledLastFigure, StyledTitle, StyledTextContainer } from './styles';

import paseando1 from '../../assets/paseando-1.jpg';
import paseando2 from '../../assets/paseando-2.jpg';
import paseando3 from '../../assets/paseando-3.jpg';

const Walking = () => {
  return (
    <div>
      <div className="grid">
        <div className="col-12">
          <StyledTitle>DOG WALKING</StyledTitle>
        </div>
      </div>
      <div className="grid">
        <div className="col-4">
          <StyledFigure>
            <img src={paseando1} alt="Paseando a moka la perra" />
            <StyledTextContainer>
              <h3>Confianza</h3>
            </StyledTextContainer>
          </StyledFigure>
        </div>
        <div className="col-4">
          <StyledFigure>
            <img src={paseando2} alt="Paseando a moka la perra" />
            <StyledTextContainer>
              <h3>Confianza</h3>
            </StyledTextContainer>
          </StyledFigure>
        </div>
        <div className="col-4">
          <StyledLastFigure>
            <img src={paseando3} alt="Paseando a moka la perra" />
            <StyledTextContainer>
              <h3>Confianza</h3>
            </StyledTextContainer>
          </StyledLastFigure>
        </div>
      </div>
    </div>
  )
}

export default Walking;