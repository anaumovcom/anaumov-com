import styled from "styled-components";

export const MenuOptionWrapper = styled.div<any>`
  font-size: 2.3vh;
  line-height: 2.3vh;
  margin-left: 1vh;
  border-radius: 1vh;
  padding: 0.7vh 1.2vh;
  border: 0.4vh solid ${props => props.isActive ? props.theme.accent : props.theme.background};
  cursor: pointer;
  background: ${props => props.isActive ? props.theme.accent : "none"};
  color: ${props => props.isActive ? props.theme.secondText : "none"};
  
  &:hover{
    border: 0.4vh solid ${props => props.isActive ? props.theme.accent : props.theme.lightAccent};
  }
`;