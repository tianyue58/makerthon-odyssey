import styled, { createGlobalStyle } from "styled-components/macro";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
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

/**used for sign-up, log-in pages */

export const Input = styled.input`
  width: ${({ inputwidth }) => (inputwidth ? inputwidth : "250px")};
  margin: ${({ inputmargin }) => (inputmargin ? inputmargin : "10px")};
  height: ${({ inputheight }) => (inputheight ? inputheight : "35px")};
  outline: none;
  font-size: 18px;
  border: ${({ noBorder }) => (noBorder ? "none" : "1px solid #fff")};
  &::-webkit-input-placeholder {
    opacity: 0.4;
  }
`;

export const CardWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px inset hotpink;
  border-radius: 50%;
  top: 30%;
  width: 40%;
  background-color: transparent;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 900;
  padding-top: 30px;
  font-family: Cambria;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding-bottom: 10px;
`;

export const GroupInput = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  font-size: 18px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 20px;
  margin-bottom: ${({ bottommargin }) => (bottommargin ? bottommargin : "0")};
  padding-left: 10px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  ::-webkit-input-placeholder {
    color: gold;
    opacity: 0.5;
  }
`;

export const MessageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 30px;
  background-color: ${({ type }) =>
    type === "bad" ? "lightpink" : "lightgreen"};
  color: ${({ type }) => (type === "bad" ? "darkred" : "white")};
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Extra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  color: white;
`;

export const StyledLink = styled(Link)`
  color: slateblue;
  &:hover {
    background: #fff;
    font-size: 120%;
  }
  &:visited {
    text-decoration: "none";
  }
`;

/** for profile pages */

export const GroupTitle = styled.h3`
  font-family: Cambria;
  color: gray;
  margin-bottom: 10px;
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
export const ProfilePageWrapper = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const PageWrapper = styled.div`
  height: ${({ pageheight }) => (pageheight ? pageheight : "807px")};
  display: flex;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "100%")};
`;
