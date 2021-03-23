import styled from 'styled-components';

const StyledFigure = styled.figure`
  height: 100vh;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  > div {
    align-items: center;
    height: 100vh;
    display: flex;
    position: absolute;
    top: 0;
    width: 30%;

    h2 {
      color: #FFFFFF;
      font-size: 2.5rem;
      font-weight: bold;
      padding-left: 3rem;
    }
  }
`;

export {
  StyledFigure,
  StyledContainer
}