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
import tip4 from "../../images/talkingTips/4.png";
import tip5 from "../../images/talkingTips/5.png";
import tip6 from "../../images/talkingTips/6.png";

import "../../styles/animations.css";
import { GridContainer, GridItem2 } from "../../styles/featurePageStyles";

function OtherDuring() {
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
                  navigate("/TalkingState", { state: "other_during1" })
                }/>
            </GridItem2>
            <GridItem2>
              <img className="planet" src={tip2} alt="img" onClick={() =>
                  navigate("/TalkingState", { state: "other_during2" })
                }/>
              
            </GridItem2>
            <GridItem2>
              <img className="planet" src={tip3} alt="img" onClick={() =>
                  navigate("/TalkingState", { state: "other_during3" })
                }/>
            </GridItem2>
            <GridItem2>
              <img className="planet" src={tip4} alt="img" onClick={() =>
                  navigate("/TalkingState", { state: "other_during4" })
                }/>
            </GridItem2>
            <GridItem2>
              <img className="planet" src={tip5} alt="img" onClick={() =>
                  navigate("/TalkingState", { state: "other_during5" })
                }/>
            </GridItem2>
            <GridItem2>
              <img className="planet" src={tip6} alt="img" onClick={() =>
                  navigate("/TalkingState", { state: "other_during6" })
                }/>
            </GridItem2>
            
          </GridContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default OtherDuring;
