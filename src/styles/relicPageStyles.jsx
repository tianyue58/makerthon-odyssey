import { Wrapper } from "./globalStyles";
import styled from "styled-components/macro";
import grids from "../images/grids.png";
import { MainForm } from "./profilePageStyles";
import { LinkContainer } from "./featurePageStyles";
import { Button } from "./globalStyles";
import parchment from "../images/parchment.png";

/** for my relic collection display */

export const RelicsContainer = styled(MainForm)`
  margin-top: 2%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
  height: 90%;
`;

export const RelicContainer = styled.div`
  margin: 20px;
  padding: 10px 0 10px 0;
  border: 1px solid transparent;
  border-radius: 1rem;
  background: white;
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ isApproved }) =>
    isApproved ? "palegreen" : "lightblue"};
  opacity: 0.75;
`;

export const RelicTitle = styled.h2`
  font-family: Lucida Bright;
  text-transform: uppercase;
  text-align: center;
  word-break: break-word;
  width: 100%;
`;

export const RelicContentWrapper = styled(Wrapper)`
  background-image: url(${grids});
  background-color: #fffaf0;
  word-break: break-word;
  padding: 10px;
  padding-top: 30px;
  width: 90%;
  height: 100%;
  font-family: Perpetua;
  font-size: 120%;
  margin-bottom: 10px;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: radial-gradient(
      circle,
      rgba(206, 250, 107, 1) 0%,
      rgba(93, 206, 242, 1) 100%
    );
  }
`;

export const RelicInput = styled.textarea`
  outline: none;
  border: none;
  text-align: center;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  overflow: auto;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: radial-gradient(
      circle,
      rgba(206, 250, 107, 1) 0%,
      rgba(93, 206, 242, 1) 100%
    );
  }
  background: transparent;
  font-size: 120%;
`;

/**for parchment display */

export const RelicsWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(1, 400px);
  background-color: transparent;
  padding: 5%;
  grid-gap: 2%;
`;

export const LeaveARelicButton = styled(Button)`
  position: absolute;
  bottom: 5%;
  right: 2%;
  width: 150px;
`;

export const NavigationButtons = styled(LinkContainer)`
  position: absolute;
  bottom: 0;
  right: 50%;
`;

export const Parchment = styled(Wrapper)`
  word-break: break-word;
  font-family: Perpetua;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${parchment});
  margin: 10px;
  overflow: hidden;
  opacity: 0.7;
  padding: 10%;
`;

export const ParchmentTitle = styled.h2`
  font-family: Lucida Bright;
  text-transform: uppercase;
  text-align: center;
  word-break: break-word;
`;

export const ParchmentContentWrapper = styled(Wrapper)`
  word-break: break-word;
  width: 60%;
  height: 90%;
  font-size: 120%;
  font-family: Perpetua;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: lightyellow;
  }
`;
