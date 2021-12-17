import styled, { createGlobalStyle } from "styled-components/macro";

export const LightButton = styled.button`
  margin: ${({ buttonmargin }) => (buttonmargin ? buttonmargin : "10px")};
  padding: 10px 20px;
  color: #fff;
  background: white;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #00bfff;
  }
  
  position: absolute;
  bottom: 6.5em;
  font-size: 2.5em;
  line-height: 160%;
  width: 50%;
`;