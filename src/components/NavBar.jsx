import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import logo from "../images/odyssey-logo.png";
import sparklingLogo from "../gifs/sparkling-planet-logo.gif";
import planetLogo from "../gifs/planet.gif";
import { LightButton } from "../styles/globalStyles";
import { useAuth } from "./context/AuthContext";
import { useLocation } from "react-router";

const NavContainer = styled.nav`
  position: absolute;
  width: 100%;
  height: 15%;
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
  padding: 0 10px 0 15px;
  width: 49.8px;
  height: 46.1px;
`;

const Title = styled.button`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 1000;
  font-family: "Candara";
  outline: none;
  border: none;
  background: none;
  transition: color 0.5s;
  &:hover {
    color: purple;
  }
`;

const Functionalities = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

function NavBar(props) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const currentPath = props.currentPath;

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <NavContainer>
      <LogoContainer>
        <Link to={currentUser ? "/" : "/login"}>
          <NavIcon src={sparklingLogo} alt="logo" />
        </Link>
        <Link to={currentUser ? "/" : "/login"}>
          <Title>ODYSSEY</Title>
        </Link>
      </LogoContainer>
      {currentUser ? (
        <Functionalities>
          {currentPath != "/" ? (
            <Link to="/">
              <LightButton>Back to Home</LightButton>
            </Link>
          ) : null}
          {currentPath != "/ViewAllPlanets" ? (
            <Link to="/ViewAllPlanets">
              <LightButton>View Planets</LightButton>
            </Link>
          ) : null}
          {currentPath != "/UserProfile" ? (
            <Link to="/UserProfile">
              <LightButton>My Profile</LightButton>
            </Link>
          ) : null}
          {currentPath != "/MyCollections" ? (
            <Link to="/MyCollections">
              <LightButton>My Collections</LightButton>
            </Link>
          ) : null}
          {currentPath != "/GratitudeJournal" ? (
            <Link to="/GratitudeJournal">
              <LightButton>Gratitude Journal</LightButton>
            </Link>
          ) : null}
          <LightButton onClick={handleLogout}>Log Out</LightButton>
        </Functionalities>
      ) : null}
    </NavContainer>
  );
}

export default NavBar;
