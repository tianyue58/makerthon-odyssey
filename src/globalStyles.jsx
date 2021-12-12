import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
 body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 } 
 button {
   :focus{
     outline: none;
   }
 }
`;

export const VideoBackground = styled.video`
  position: fixed;
  z-index: -1;
  width: 100%;
`;

export const LightButton = styled.button`
  margin: ${({ buttonmargin }) => (buttonmargin ? buttonmargin : "10px")};
  padding: 10px 20px;
  color: #fff;
  background: transparent;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #00bfff;
  }
`;

export const InnerWrapper = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: white;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 1000;
  font-family: "papyrus";
  padding-bottom: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: white;
  text-align: center;
`;
