import styled from 'styled-components';

const StyledFigure = styled.figure`
  height: 40rem;
  overflow: hidden;
  padding: 0 0 1rem 1rem;
  position: relative;
  
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const StyledTitle = styled.h2`
  color: var(--secondary-color);
  font-size: 3rem;
  text-align: center;
`;

const StyledLastFigure = styled(StyledFigure)`
  padding-right: 1rem;
`;

const StyledTextContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  display: flex;
  justify-content: center;
  height: 10rem;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;

  h3 {
    color: #FFFFFF;
    font-weight: bold;
  }
`;

export {
  StyledFigure,
  StyledTitle,
  StyledTextContainer,
  StyledLastFigure
}