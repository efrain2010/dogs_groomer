import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-bottom: 4rem;
  text-align: center;

  ul {
    list-style: none;
  }
`;

const ServiceContainer = styled.div`
  .col-sm-4 {
    padding: 0 1rem;
  }
`;

const StyledLogoService = styled.div`
  img {
    max-width: 130px;
    margin-bottom: 1rem;
  }

  h2 {
    margin: 0;
  }
  
  h3 {
    font-size: 1rem;
    line-height: 1rem;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    margin-top: 1rem;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
`;

export {
  StyledContainer,
  ServiceContainer,
  StyledLogoService,
  StyledH2
}