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
  height: 90%;
  overflow: scroll;
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
  background-color: thistle;
  opacity: 0.75;
`;

export const RelicTitle = styled.h2`
  font-family: Lucida Bright;
  text-transform: uppercase;
  text-align: center;
  word-break: break-word;
`;

export const RelicContentWrapper = styled(Wrapper)`
  background-image: url(${grids});
  background-color: #fffaf0;
  word-break: break-word;
  padding: 10px;
  padding-top: 30px;
  width: 90%;
  height: 70%;
  font-family: Perpetua;
  font-size: 110%;
  margin-bottom: 10px;
  overflow: auto;
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

export const RelicContentInput = styled.textarea`
  outline: none;
  border: none;
  width: 99%;
  height: 100%;
  border: 1px solid transparent;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
  margin: 0;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: radial-gradient(
      circle,
      rgba(206, 250, 107, 1) 0%,
      rgba(93, 206, 242, 1) 100%
    );
  }
  background: transparent;
  resize: none;
  font-size: 110%;
`;

export const RelicTitleInput = styled.textarea`
  outline: none;
  border: 1px solid;
  border-color: ${({ warning }) => (warning ? "red" : "green")};
  border-radius: 0.5rem;
  width: 99%;
  height: 100%;
  overflow: auto;
  padding: 0;
  margin: 0;
  background: transparent;
  resize: none;
  font-size: 110%;
  max-height: 5%;
`;

/**for parchment display */

export const RelicsWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(1, 400px);
  background-color: transparent;
  padding: 5%;
  grid-gap: 5%;
`;

export const LeaveARelicButton = styled(Button)`
  position: absolute;
  bottom: 5%;
  right: 2%;
  width: 150px;
`;

export const IconWrapper = styled(LinkContainer)`
  justify-content: space-evenly;
  width: ${({ width }) => (width ? width : "50%")};
  position: absolute;
  bottom: 3%;
`;

export const Parchment = styled(Wrapper)`
  word-break: break-word;
  font-family: Perpetua;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${parchment});
  overflow: auto;
  opacity: 0.7;
  padding: 20%;
  width: 60%;
  height: 80%;
`;

export const ParchmentTitle = styled.div`
  font-family: Lucida Bright;
  text-transform: uppercase;
  text-align: center;
  word-break: break-word;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  position: absolute;
  top: 5%;
  text-size-adjust: auto;
  max-height: 5%;
  width: 70%;
`;

export const ParchmentContentWrapper = styled.div`
  word-break: break-word;
  font-size: 110%;
  font-family: Perpetua;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: lightyellow;
  }
`;
