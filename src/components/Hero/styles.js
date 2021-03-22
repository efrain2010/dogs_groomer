import styled from 'styled-components';

const StyledFigure = styled.figure`
  height: calc(100vh - 1rem);
  overflow: hidden;
`;

const StyledContainer = styled.div`
  border-bottom: 1rem solid var(--primary-color);

  > div {
    align-items: center;
    height: calc(100vh - 1rem);
    display: flex;
    position: absolute;
    top: 0;
    width: 40%;

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