import styled, { createGlobalStyle } from "styled-components/macro";
import { Link } from "react-router-dom";
import { BsPatchQuestion } from "react-icons/bs";

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  padding: 0;
 } 
 button {
   :focus{
     outline: none;
   }
 }
`;

export const WholePage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const PageBelowNavBar = styled(WholePage)`
  top: 15%;
  height: 85%;
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

export const Button = styled.button`
  margin: ${({ buttonmargin }) => (buttonmargin ? buttonmargin : "10px")};
  width: ${({ buttonwidth }) => (buttonwidth ? buttonwidth : "100px")};
  padding: ${({ buttonpadding }) => (buttonpadding ? buttonpadding : "10px")};
  background: ${({ buttoncolor }) => (buttoncolor ? buttoncolor : "#e9967a")};
  color: #fff;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #a52a2a;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ToolTipText = styled.span`
  visibility: hidden;
  width: ${({ width }) => (width ? width : "150px")};
  background-color: ${({ background }) =>
    background ? background : "lightgreen"};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 60%;
  left: 140%;
  margin-left: -60px;
  transition: opacity 1s;
  opacity: 0;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
  }
`;

export const ToolTip = styled("div")({
  position: "relative",
  display: "inline-block",
  borderBottom: "none",
  ":hover span": {
    visibility: "visible",
    opacity: 1,
  },
});

export const TitleWrapper = styled.div`
  position: relative;
`;

export const QuestionIcon = styled(BsPatchQuestion)`
  position: absolute;
  border-radius: 1rem;
`;
