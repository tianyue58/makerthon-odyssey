import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import background from "../../backgrounds/home-galaxy.mp4";
import { VideoBackground, WholePage, Wrapper } from "../../styles/globalStyles";
import { LinkContainer, TextContainer } from "../../styles/featurePageStyles";
import {
  AnimatedLightButton,
  containerVariants,
} from "../../styles/animatedStyles";
import "../../styles/animations.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

function Home() {
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
          <TextContainer>
            <p class="line anim-typewriter">
              Hey Earthling! How are you feeling today?
            </p>
          </TextContainer>
          <LinkContainer>
            <Link to="/ChooseProblem">
              {AnimatedLightButton("I'm not doing very well...")}
            </Link>
            <Link to="/ChooseProblem">
              {AnimatedLightButton(
                " I'm fine, but there's someone I'm worried about..."
              )}
            </Link>
            <Link to="/ChooseProblem">
              {AnimatedLightButton("I'm fine, and I want to stay this way!")}
            </Link>
          </LinkContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default Home;
