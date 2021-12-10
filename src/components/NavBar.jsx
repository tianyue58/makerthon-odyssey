import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import logo from "../images/odyssey-logo.png";
import { LightButton } from "../globalStyles";

const NavContainer = styled.nav`
  position: absolute;
  width: 100%;
  height: 80px;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavIcon = styled.img`
  padding-left: 10px;
  width: 55px;
  height: 55px;
`;

const Title = styled.button`
  color: #fff;
  margin-left: 10px;
  font-size: 1.8rem;
  font-weight: 1000;
  font-family: "Candara";
  outline: none;
  border: none;
  background: none;
`;

const Functionalities = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

function NavBar() {
  return (
    <NavContainer>
      <LogoContainer>
        <NavIcon src={logo} alt="logo" />
        <Link to="/">
          <Title>ODYSSEY</Title>
        </Link>
      </LogoContainer>
      <Functionalities>
        <Link to="/ChooseProblem">
          <LightButton>Page 1</LightButton>
        </Link>
        <LightButton>Page 2</LightButton>
        <LightButton>Page 3</LightButton>
      </Functionalities>
    </NavContainer>
  );
}

export default NavBar;
