import React from 'react';

import { StyledContainer } from './styles';

const Services = () => {
  return (
    <StyledContainer>
      <div className="grid">
        <div className="col-6">
          <h2>BAÑO SIMPLE</h2>
        </div>
        <div className="col-6">
          <h2>BAÑO ESPECIAL<br/>(PARA QUITAR GARRAPATAS Y PULGAS)</h2>
        </div>
        <div className="col-12">
          <h3>LOS BAÑOS INCLUYEN:</h3>
          <ul> 
            <li>Limpieza corporal</li>
            <li>Corte y/o limado de uñas</li>
            <li>Limpieza de orejas</li>
            <li>Lavado de dientes</li>
            <li>Glandulas anales</li>
          </ul>
        </div>
        <div className="col-12">
          <h2>Paseo de Mascotas</h2>
        </div>
        <div className="col-12">
          <h2>Contamos con servicio a domicilio</h2>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Services;