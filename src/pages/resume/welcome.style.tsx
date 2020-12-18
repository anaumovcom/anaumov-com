import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //flex: 1 1;
  justify-content: center;
  align-items: center;
  //background: red;
  padding-top: 10vh;

  width: 60vh;
  
  //@media (max-width: 500px){
  //  width: 200px;
  //}
  
  //@media (max-width: 2000px){
  //  width: 500px;
  //}
  
`;

export const WelcomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const TitleH1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 4vh;
  font-weight: 900;
  margin: 0 0 2vh 0;
  //padding-bottom: 0.5vh;
  width: 100%;
  color: ${props => props.theme.accent};
  // border-bottom: 2px solid ${props => props.theme.accent};
`;

export const TitleH2 = styled.h2`
  font-size: 2.8vh;
  display: flex;
  justify-content: center;
  font-weight: 500;
  margin: 0 0 2vh 0;
  width: 100%;
`;

export const Text = styled.span`
  font-size: 1vh;
  width: 100%;
`;

export const ColoredText = styled(Text)`
  color: ${props => props.color};
`;