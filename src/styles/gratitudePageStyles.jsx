import { Wrapper } from "./globalStyles";
import styled from "styled-components/macro";
import grids from "../images/grids.png";

export const GratitudeContainer = styled.div`
  margin: 20px;
  padding: 10px 0 10px 0;
  border: 1px solid transparent;
  border-radius: 1rem;
  background: white;
  opacity: 0.7;
  transition: 0.5s;
  &:hover {
    opacity: 1;
  }
  width: 500px;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: Thistle;
`;

export const GratitudeTitle = styled.h2`
  font-family: Lucida Bright;
  text-transform: uppercase;
  text-align: center;
  word-break: break-word;
`;

export const GratitudeContentWrapper = styled(Wrapper)`
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

export const GratitudeInput = styled.textarea`
  outline: none;
  border: none;
  text-align: center;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 1rem;
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
`;
