import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import background from "../../backgrounds/tips-galaxy.mp4";
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

function TipsToStayHealthy() {
  const navigate = useNavigate();

  const AnimatedColorfulButton = (
    label,
    navigation,
    isAboutMyself,
    themeColor
  ) => {
    return (
      <LightButton
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          navigate(navigation, { state: { aboutMyself: isAboutMyself } })
        }
        themeColor={themeColor}
      >
        {label}
      </LightButton>
    );
  };

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
              <div className="css-typing">
            
            <p>It's good that you are fine.</p>
            <p>
            It’s important to take care of yourself.
            </p>
            <p>
            Check out tips to look after your mental health.
            </p>
            </div>
          </TextContainer>
          <LinkContainer>
            {AnimatedColorfulButton(
              "Previous",
              "/",
              true,
              "red"
            )}
            {AnimatedColorfulButton(
              "Tips",
              "/Tips",
              true
            )}
            
          </LinkContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default TipsToStayHealthy;
