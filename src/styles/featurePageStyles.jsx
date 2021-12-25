import styled from "styled-components/macro";
import { LightButton } from "./globalStyles";

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
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 10px;
`;
