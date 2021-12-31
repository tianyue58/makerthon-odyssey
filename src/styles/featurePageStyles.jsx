import styled from "styled-components/macro";
import { LightButton } from "./globalStyles";
import magicBox from "../gifs/magic-box.gif";

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

export const NavigationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  height: 60px;
  margin-top: 20px;
`;

export const SelectedLightButton = styled(LightButton)`
  &:focus {
    background: #fff;
    color: #00bfff;
    font-size: 110%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: transparent;
  position: absolute;
  top: 15%;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-evenly;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 20px;
`;

export const GridItem2 = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const PlanetWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const SolutionContentWrapper = styled.div`
  padding: 15% 5% 0 5%;
  width: 50%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SolutionTextWrapper = styled.div`
  width: 70%;
`;

export const PlanetSolutionsWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  background-color: transparent;
`;

export const BoxWrapper = styled.button`
  border: none;
  outline: none;
  background: none;
  position: absolute;
  bottom: 3%;
  right: 35%;
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${magicBox});
`;

export const SampleWrapper = styled.div`
  width: 75%;
  font-size: 2em;
`;

export const TalkIconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  bottom: -36%;
  left: 1%;
  width: 14%;
  height: 14%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const BackIconWrapper = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 14%;
  height: 14%;
  bottom: ${({ bottom }) => (bottom ? bottom : "20%")};
  left: ${({ left }) => (left ? left : "5%")};
`;
