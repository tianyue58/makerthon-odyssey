import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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
