import styled from "styled-components/macro";
import { Link } from "react-router-dom";

/** page layout */
export const MainPageLeft = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
  background-color: lightyellow;
  opacity: 80%;
`;
export const SubPageRight = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  left: 70%;
  width: 30%;
  height: 100%;
  background-color: lightskyblue;
  opacity: 60%;
`;

export const MainPageRight = styled(MainPageLeft)`
  left: 30%;
`;

export const SubPageLeft = styled(SubPageRight)`
  left: 0%;
`;

/** for sign up/ log in card */
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background-color: transparent;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 900;
  padding-top: 30px;
  font-family: Cambria;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding-bottom: 10px;
`;

export const GroupTitle = styled.h4`
  color: gray;
  padding-top: 10px;
  margin: 10px;
`;

export const GroupInput = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: none;
  font-size: 18px;
  background: lightskyblue;
  margin-bottom: 10px;
  color: white;
  ::-webkit-input-placeholder {
    color: gray;
    font-size: 13px;
    font-style: italic;
  }
`;

export const MessageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : "50%")};
  height: ${({ height }) => (height ? height : "30px")};
  background-color: ${({ type }) =>
    type === "bad" ? "lightpink" : "lightgreen"};
  color: ${({ type }) => (type === "bad" ? "darkred" : "white")};
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "15px"};
  padding: 5px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    font-size: 110%;
  }
  &:visited {
    color: purple;
  }
`;

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
