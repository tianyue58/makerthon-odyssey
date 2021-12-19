import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import travelling from "../../backgrounds/go-to-planet.mp4";
import background from "../../backgrounds/emotion-planet.mp4";
import styled from "styled-components/macro";
import {
  LightButton,
  VideoBackground,
  WholePage,
  Wrapper,
} from "../../styles/globalStyles";
import { TextContainer, LinkContainer } from "../../styles/featurePageStyles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { containerVariants } from "../../styles/animatedStyles";
import "../../styles/animations.css";

function EmotionPlanet() {
  const [displayPlanet, setDisplayPlanet] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [solution, setSolution] = useState("");

  const handleDisplaySolution = (index) => {
    const solution = "Don't worry! No boyfriend, no problems :D";
    setSolution(solution);
    setShowSolution(true);
  };

  return (
    <>
      {!displayPlanet ? (
        <VideoBackground
          autoPlay
          muted
          playsInline
          onEnded={() => setDisplayPlanet(true)}
        >
          <source src={travelling} type="video/mp4" />
        </VideoBackground>
      ) : (
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
            {showDetail ? (
              <>
                {showSolution ? (
                  <Wrapper>
                    <TextContainer>{solution}</TextContainer>
                    <Link to="/">
                      <LightButton>Go it!</LightButton>
                    </Link>
                  </Wrapper>
                ) : (
                  <Wrapper>
                    <TextContainer>
                      Here are some relics left by those who had visited this
                      planet before... <br />
                      Pick one to explore!
                    </TextContainer>
                    <LinkContainer>
                      <LightButton onClick={() => handleDisplaySolution("1")}>
                        Solution 1
                      </LightButton>
                      <LightButton>Solution 2</LightButton>
                      <LightButton>Solution 3</LightButton>
                    </LinkContainer>
                  </Wrapper>
                )}
              </>
            ) : (
              <Wrapper>
                <TextContainer>
                  You're on Planet XYZ, 1000 light years away from the Earth{" "}
                  <br />
                  Currently there are 100 other earthlings on this planet,{" "}
                  <br />
                  who are experiencing the same emotion as you <br />
                  Click to explore more
                </TextContainer>
                <LightButton onClick={() => setShowDetail(true)}>
                  Explore the planet
                </LightButton>
              </Wrapper>
            )}
          </WholePage>
        </motion.div>
      )}
    </>
  );
}

export default EmotionPlanet;
