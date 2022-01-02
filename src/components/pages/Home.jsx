import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import background from "../../backgrounds/home-galaxy.mp4";
import {
  LightButton,
  VideoBackground,
  WholePage,
  Wrapper,
} from "../../styles/globalStyles";
import { LinkContainer, TextContainer } from "../../styles/featurePageStyles";
import {
  AnimatedLightButton,
  containerVariants,
} from "../../styles/animatedStyles";
import "../../styles/animations.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

function Home() {
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
          <TextContainer>
            <p className="line anim-typewriter">
              Hey Earthling! How are you feeling today?
            </p>
          </TextContainer>
          <LinkContainer>
            <LightButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/ChooseProblem", { state: true })}
              themeColor="red"
            >
              I have something on my mind
            </LightButton>
            <LightButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/ChooseProblem", { state: false })}
              themeColor="blue"
            >
              I'm worrying for someone else
            </LightButton>
            <LightButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/TipsToStayHealthy")}
              themeColor="green"
            >
              I'm in a good mood
            </LightButton>
            {/* <LightButton
              onClick={() =>
                navigate("/ChooseProblem", { state: { aboutMyself: true } })
              }
            >
              I have something on my mind
            </LightButton>
            <LightButton
              onClick={() =>
                navigate("/ChooseProblem", { state: { aboutMyself: false } })
              }
            >
              I'm worrying for someone else
            </LightButton>
            <LightButton onClick={() => navigate("/ChooseProblem")}>
              I'm in a good mood
            </LightButton> */}
          </LinkContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default Home;
