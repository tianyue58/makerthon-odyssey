import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../backgrounds/view-galaxy-page.mp4";
import styled from "styled-components/macro";
import {
  VideoBackground,
  WholePage,
  LightButton,
  Wrapper,
  Button,
} from "../../styles/globalStyles";
import {
  TextContainer,
  LinkContainer,
  NavigationButtonContainer,
  SelectedLightButton,
} from "../../styles/featurePageStyles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { containerVariants } from "../../styles/animatedStyles";
import "../../styles/animations.css";
import planet from "../../images/odyssey-logo.png";
import anotherplanet from "../../images/unicorn.svg";
import Asteroid325 from "./planets/Asteroid325";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
  width: 80%;
  height: 400px;
`;

const GridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

const Planet = styled.img`
  width: 100px;
  height: 100px;
`;

function ViewAllPlanets() {
  const [displayPlanet, setDisplayPlanet] = useState(false);

  return (
    <motion.div
      className="page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <WholePage>
        <Wrapper>
          <GridContainer>
            <GridItem>
              <Planet src={planet} alt="planet" />
              <Link to="/Asteroid325">
                <Button>Planet name</Button>
              </Link>
            </GridItem>
            <GridItem>
              <Planet src={planet} alt="planet" />
              <Button>Planet name</Button>
            </GridItem>
            <GridItem>
              <Planet src={planet} alt="planet" />
              <Button>Planet name</Button>
            </GridItem>
            <GridItem>
              <Planet src={planet} alt="planet" />
              <Button>Planet name</Button>
            </GridItem>
            <GridItem>
              <Planet src={planet} alt="planet" />
              <Button>Planet name</Button>
            </GridItem>
            <GridItem>
              <Planet src={anotherplanet} alt="planet" />
              <Button>Planet name</Button>
            </GridItem>
          </GridContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default ViewAllPlanets;
