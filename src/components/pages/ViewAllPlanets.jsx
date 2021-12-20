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
import logo325 from "../../gifs/planets/Asteroid325.gif";
import logo326 from "../../gifs/planets/Asteroid326.gif";
import logo327 from "../../gifs/planets/Asteroid327.gif";
import logo328 from "../../gifs/planets/Asteroid328.gif";
import logo329 from "../../gifs/planets/Asteroid329.gif";
import logo330 from "../../gifs/planets/Asteroid330.gif";
import "../../styles/animations.css";

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
              <img className="planet" src={logo325} alt="img" />
              <Link to="/Asteroid325">
                <Button>Asteroid 325</Button>
              </Link>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo326} alt="img" />
              <Link to="/Asteroid326">
                <Button>Asteroid 326</Button>
              </Link>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo327} alt="img" />
              <Link to="/Asteroid327">
                <Button>Asteroid 327</Button>
              </Link>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo328} alt="img" />
              <Link to="/Asteroid328">
                <Button>Asteroid 328</Button>
              </Link>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo329} alt="img" />
              <Link to="/Asteroid329">
                <Button>Asteroid 329</Button>
              </Link>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo330} alt="img" />
              <Link to="/Asteroid330">
                <Button>Asteroid 330</Button>
              </Link>
            </GridItem>
          </GridContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default ViewAllPlanets;
