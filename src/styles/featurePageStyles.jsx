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
