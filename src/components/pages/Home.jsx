import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import background from "../../backgrounds/home-galaxy.mp4";
import {
  LightButton,
  PageBelowNavBar,
  VideoBackground,
  Wrapper,
} from "../../styles/globalStyles";
import { LinkContainer, TextContainer } from "../../styles/featurePageStyles";
import { containerVariants } from "../../styles/animatedStyles";
import "../../styles/animations.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import somethingOnMind from "../../images/icons/sth-on-mind-icon.png";
import worryForOther from "../../images/icons/worry-for-other-icon.png";
import goodMood from "../../images/icons/good-mood-icon.png";
import somethingOnMindDialog from "../../images/icons/sth-on-mind-dialog-removebg-preview.png";
import worryForOtherDialog from "../../images/icons/worry-for-other-dialog-removebg-preview.png";
import goodMoodDialog from "../../images/icons/good-mood-dialog-removebg-preview.png";
import "../../styles/hoverTips.css";

const HomeWrapper = styled(Wrapper)`
  justify-content: flex-start;
  margin-top: 5%;
`;

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
      <PageBelowNavBar>
        <HomeWrapper>
          <TextContainer>
            <p className="line anim-typewriter">
              Hey Earthling! How are you feeling today?
            </p>
          </TextContainer>
          <LinkContainer
            style={{ width: "80%" }}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <div class="container">
              <img
                src={somethingOnMind}
                alt="Avatar"
                class="image planet"
                onClick={() => navigate("/ChooseProblem", { state: true })}
              />
              <img class="overlay" src={somethingOnMindDialog} alt="dialog" />
            </div>
            <div class="container">
              <img
                src={worryForOther}
                alt="Avatar"
                class="image planet"
                onClick={() => navigate("/ChooseProblem", { state: false })}
              />
              <img class="overlay" src={worryForOtherDialog} alt="dialog" />
            </div>
            <div class="container">
              <img
                src={goodMood}
                alt="Avatar"
                class="image planet"
                onClick={() => navigate("/TipsToStayHealthy")}
              />
              <img class="overlay" src={goodMoodDialog} alt="dialog" />
            </div>
          </LinkContainer>
        </HomeWrapper>
      </PageBelowNavBar>
    </motion.div>
  );
}

export default Home;
