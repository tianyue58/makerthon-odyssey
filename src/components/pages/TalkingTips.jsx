import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../backgrounds/tips-galaxy.mp4";
import {
  LightButton,
  VideoBackground,
  WholePage,
  Wrapper,
} from "../../styles/globalStyles";
import { LinkContainer, TextContainer } from "../../styles/featurePageStyles";
import {
  containerVariants,
} from "../../styles/animatedStyles";
import "../../styles/animations.css";
import { motion } from "framer-motion/dist/framer-motion";

function TalkingTips() {
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
            
            <p>The first step towards alleviating negative</p>
            <p>feelings is to talk about them.</p>
            <p>
            Check out the conversation tips now.
            </p>
            </div>
          </TextContainer>
          <LinkContainer>
            {AnimatedColorfulButton(
              "Before the conversation",
              "/MeBefore",
              true,
              "red"
            )}
            {AnimatedColorfulButton(
              "The Conversation",
              "/MeDuring",
              true
            )}
            
          </LinkContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default TalkingTips;
