import styled from "styled-components";

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2vh;
`;

export const SkillLine = styled.div<any>`
  display: flex;
  
  margin-bottom: 0.5vh;
`;

export const Skill = styled.div<any>`
  display: inline-flex;
  align-items: center;
  font-size: 2.5vh;
  color: ${props => props.textColor ? props.textColor : props.theme.mainText};
  background: ${props => props.bgColor ? props.bgColor : props.theme.accent};
  margin: 0.5vh 0.5vh 0 0;
  padding: 0.35vh 1.6vh 0.35vh 0.95vh;
  border-radius: 1vh;
  height: 4vh;
`;

export const SkillText = styled.span<any>`
  margin-left: 0.5vh;
`;