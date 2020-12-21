import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  //background: black;
  justify-content: flex-end;
  align-items: center;
  //box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.5);
  @media (max-width: 30vh){
    height: 21vh;
  }
`;


//#5445FF
export const Logo = styled.img`
  position: absolute;
  left: 3vh;
  height: 5vh;
  width: 5vh;

  @media (max-width: 75vh){
    top: 1.4vh;
  }
`;

export const NickTag = styled.span`
  position: absolute;
  top: 3.1vh;
  left: 9vh;
  color: ${props => props.theme.accent};
  font-weight: 600;
  font-size: 2.7vh;

  @media (max-width: 75vh){
   top: 2vh;
  }
`;

export const Menu = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5vh;
  
  @media (max-width: 75vh){
    margin-top: 8.2vh;
    margin-right: 0;
  }
`;