import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--primary-color);
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  
  h2, h3 {
    color: #FFFFFF;
  }

  * {
    margin: 0;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
  }

  `;

const StyledFigure = styled.figure`
  img {
    max-width: 6rem;
  }
`;

const StyledAddressText = styled.h2`
  margin-top: 1.5rem;

  a {
    color: #FFFFFF;
  }
`;

const StyledInfoBox = styled.div`
  margin-top: 1.5rem;

  a {
    color: #FFFFFF;
    text-decoration: none;
  }
`;

const DesignedBy = styled.div`
  background-color: #0c152b;
  margin-top: 2rem;
  padding: 0.6rem 0;

  h4 {
    a {
      color: #FFFFFF;
      font-size: 0.8rem;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

export {
  StyledFooter,
  StyledAddressText,
  StyledFigure,
  StyledInfoBox,
  DesignedBy
}