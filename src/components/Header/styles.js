import styled from 'styled-components';

const StyledHeader = styled.header`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  > div {
    padding: 1.4rem 1rem;
  }
`;

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  position: relative;

  img {
    max-width: 9rem;
  }

  h1, h2 {
    color: #FFFFFF;
    font-size: 2rem;
    margin: 0;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  float: right;
  padding-top: 4rem;
  padding-right: 1rem;
  
  div {
    padding: 0 1rem;
    
    a {
      color: #FFFFFF;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

const StyledBookBtn = styled.button`
  border: 1px solid black;
`;

export {
  StyledHeader,
  StyledLogo,
  StyledMenu,
  StyledBookBtn
}
