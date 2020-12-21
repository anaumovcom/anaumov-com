import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1vh;
  width: 100%;
  background: ${props => props.theme.accent};
`;