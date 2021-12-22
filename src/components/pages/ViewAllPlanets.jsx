import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import background from "../../backgrounds/view-galaxy.mp4";
import styled from "styled-components/macro";
import {
  VideoBackground,
  WholePage,
  Wrapper,
  Button,
  LightButton,
} from "../../styles/globalStyles";
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
import { GridContainer, GridItem } from "../../styles/featurePageStyles";

function ViewAllPlanets() {
  const navigate = useNavigate();

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
              <LightButton
                onClick={() =>
                  navigate("/EmotionPlanet", { state: "Asteroid325" })
                }
              >
                Asteroid 325
              </LightButton>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo326} alt="img" />
              <LightButton
                onClick={() =>
                  navigate("/EmotionPlanet", { state: "Asteroid326" })
                }
              >
                Asteroid 326
              </LightButton>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo327} alt="img" />
              <LightButton
                onClick={() =>
                  navigate("/EmotionPlanet", { state: "Asteroid327" })
                }
              >
                Asteroid 327
              </LightButton>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo328} alt="img" />
              <LightButton
                onClick={() =>
                  navigate("/EmotionPlanet", { state: "Asteroid328" })
                }
              >
                Asteroid 328
              </LightButton>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo329} alt="img" />
              <LightButton
                onClick={() =>
                  navigate("/EmotionPlanet", { state: "Asteroid329" })
                }
              >
                Asteroid 329
              </LightButton>
            </GridItem>
            <GridItem>
              <img className="planet" src={logo330} alt="img" />
              <LightButton
                onClick={() =>
                  navigate("/EmotionPlanet", { state: "Asteroid330" })
                }
              >
                Asteroid 330
              </LightButton>
            </GridItem>
          </GridContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default ViewAllPlanets;
