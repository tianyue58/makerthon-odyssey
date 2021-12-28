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
import tip1 from "../../images/talkingTips/1.png";
import tip2 from "../../images/talkingTips/2.png";
import tip3 from "../../images/talkingTips/3.png";


import "../../styles/animations.css";
import { GridContainer, GridItem2 } from "../../styles/featurePageStyles";

function MeBefore() {
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
            <GridItem2>
              <img className="planet" src={tip1} alt="img" onClick={() =>
                  navigate("/TalkingState", { state: "me_before1" })
                }/>
            </GridItem2>
            <GridItem2>
              <img className="planet" src={tip2} alt="img" onClick={() =>
                  navigate("/TalkingState", { state: "me_before2" })
                }/>
              
            </GridItem2>
            <GridItem2>
              <img className="planet" src={tip3} alt="img" onClick={() =>
                  navigate("/TalkingState", { state: "me_before3" })
                }/>
            </GridItem2>
            
          </GridContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default MeBefore;
