import React from 'react';

import { StyledContainer, ServiceContainer, StyledLogoService, StyledH2 } from './styles';

import service1 from '../../assets/service-1.png';
import service2 from '../../assets/service-2.png';
import service3 from '../../assets/service-3.png';

const Services = () => {
  return (
    <StyledContainer>
      <div className="grid">
        <div className="col-12">
          <StyledH2>Nuestros Servicios</StyledH2>
        </div>
        <ServiceContainer>
          <div className="col-sm-4">
            <StyledLogoService>
              <img src={service1} alt="Baño simple para mascotas"/>
              <h2>Baño Simple</h2>
              <ul> 
                <li>Limpieza corporal</li>
                <li>Corte y/o limado de uñas</li>
                <li>Limpieza de orejas</li>
                <li>Lavado de dientes</li>
                <li>Glandulas anales</li>
              </ul>
            </StyledLogoService>
          </div>
          <div className="col-sm-4">
            <StyledLogoService>
              <img src={service2} alt="Baño especial para mascotas"/>
              <h2>Baño Especial</h2>
              <h3>Especial para quitar garrapatas y pulgas</h3>
              <ul> 
                <li>Limpieza corporal</li>
                <li>Corte y/o limado de uñas</li>
                <li>Limpieza de orejas</li>
                <li>Lavado de dientes</li>
                <li>Glandulas anales</li>
              </ul>
            </StyledLogoService>
          </div>
          <div className="col-sm-4">
            <StyledLogoService>
              <img src={service3} alt="Paseo de mascotas"/>
              <h2>Paseo de Mascotas</h2>
              <p>El perfecto desestres para tu mascota, ¿sabías que la mayoría de los perros rompe cosas en casa por estrés? Además de ayudar a ejercitar a tu mascota el salir a caminar ayuda a liberar ese estrés.</p>
            </StyledLogoService>
          </div>
          <div className="col-sm-12">
            <h3>Contamos con servicio a domicilio</h3>
          </div>
        </ServiceContainer>
      </div>
    </StyledContainer>
  );
};

export default Services;