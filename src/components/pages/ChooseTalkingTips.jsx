import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import background from "../../backgrounds/talking-tips-galaxy.mp4";
import styled from "styled-components/macro";
import {
  VideoBackground,
  WholePage,
  Wrapper,
  Button,
  LightButton,
} from "../../styles/globalStyles";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { containerVariants } from "../../styles/animatedStyles";
import "../../styles/animations.css";
import bubble from "../../images/bubble.png";
import { PageBelowNavBar } from "../../styles/globalStyles";
import { Title } from "../../styles/authenticationPageStyles";
import TalkingTipIcon from "./TalkingTipIcon";
import {
  PlanetSolutionsWrapper,
  PlanetWrapper,
  SolutionContentWrapper,
  SolutionTextWrapper,
  SampleWrapper,
  BackIconWrapper,
} from "../../styles/featurePageStyles";
import seeOtherTips from "../../images/seeOtherTips.png";
import backToPlanet from "../../images/backToPlanet.png";
import "../../styles/animations.css";

function ChooseTalkingTips() {
  const navigate = useNavigate();
  const location = useLocation();
  const [planet, setPlanet] = useState();

  const [tips, setTips] = useState();
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState();

  async function getTalkingTips() {
    const { aboutWhom, phase, planet } = location.state;
    setPlanet(planet.replace(/\s+/g, ""));
    const collectionName = aboutWhom + "_" + phase;
    const tipsSnap = await getDocs(collection(db, collectionName));
    const tipsArray = [];
    tipsSnap.forEach((tip) => tipsArray.push(tip.data()));
    setTips(tipsArray);
  }

  useEffect(() => getTalkingTips(), []);

  const handleShowTip = (index) => {
    const tip = tips[index];
    setCurrentTip(tip);
    setShowTip(true);
  };

  const displayedResult =
    tips &&
    tips.map((tip, index) => {
      return (
        <TalkingTipIcon
          icon={tip.icon}
          key={index}
          index={index}
          onClick={handleShowTip}
        />
      );
    });

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
        {showTip ? (
          <Wrapper alignment="row">
            <SolutionContentWrapper className="slideInLeft" key={currentTip.id}>
              <Title
                as={motion.h1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {currentTip.name}
              </Title>
              <SolutionTextWrapper
                as={motion.div}
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  duration: 2.5,
                  delay: 1,
                }}
              >
                {currentTip.content}
              </SolutionTextWrapper>
              <BackIconWrapper
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                style={{
                  backgroundImage: `url('${seeOtherTips}')`,
                }}
                onClick={() => setShowTip(false)}
                className="planet"
              />
            </SolutionContentWrapper>
            <PlanetWrapper
              style={{
                backgroundImage: `url('${bubble}')`,
              }}
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <SampleWrapper
                as={motion.div}
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  duration: 2.5,
                  delay: 1,
                }}
              >
                {currentTip.sample}
              </SampleWrapper>
            </PlanetWrapper>
          </Wrapper>
        ) : (
          <Wrapper>
            <PlanetSolutionsWrapper style={{ marginLeft: "10%" }}>
              {displayedResult}
            </PlanetSolutionsWrapper>
            <BackIconWrapper
              style={{
                backgroundImage: `url('${backToPlanet}')`,
                bottom: "10%",
                left: 0,
              }}
              onClick={() => navigate("/EmotionPlanet", { state: planet })}
              className="planet"
            ></BackIconWrapper>
          </Wrapper>
        )}
      </PageBelowNavBar>
    </motion.div>
  );
}
export default ChooseTalkingTips;
