import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import background from "../../backgrounds/emotion-planet-galaxy.mp4";
import { containerVariants } from "../../styles/animatedStyles";
import {
  Button,
  PageBelowNavBar,
  VideoBackground,
  Wrapper,
} from "../../styles/globalStyles";
import SolutionIcon from "./SolutionIcon";
import {
  MainPageLeft,
  SubPageRight,
  Title,
} from "../../styles/authenticationPageStyles";
import "../../styles/animations.css";

const PlanetWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const SolutionContentWrapper = styled.div`
  padding: 20% 5% 0 5%;
  width: 50%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SolutionTextWrapper = styled.div`
  width: 70%;
`;

const PlanetSolutionsWrapper = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  background-color: transparent;
`;

function SolutionPlanet() {
  const [solutions, setSolutions] = useState();
  const location = useLocation();
  const [planetImage, setPlanetImage] = useState();
  const [showContent, setShowContent] = useState(false);
  const [currentSolution, setCurrentSolution] = useState();

  async function componentOnMount() {
    const { planetImage, solutionCollectionName } = location.state;
    setPlanetImage(planetImage);
    const solutionsSnap = await getDocs(collection(db, solutionCollectionName));
    const solutionArray = [];
    solutionsSnap.forEach((solution) => solutionArray.push(solution.data()));
    setSolutions(solutionArray);
  }

  useEffect(() => componentOnMount(), []);

  const handleShowContent = (index) => {
    setShowContent(true);
    setCurrentSolution(solutions[index]);
    console.log(index);
  };

  const displayedResult =
    solutions &&
    solutions.map((solution, index) => {
      return (
        <SolutionIcon
          solutionObject={solution}
          key={index}
          index={index}
          onClick={handleShowContent}
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
        {showContent ? (
          <Wrapper alignment="row">
            <SolutionContentWrapper className="slideInLeft" key={Math.random()}>
              <Title
                as={motion.h1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {currentSolution.name}
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
                {currentSolution.content}
              </SolutionTextWrapper>
            </SolutionContentWrapper>
            <PlanetWrapper
              style={{
                backgroundImage: `url('${planetImage}')`,
              }}
            >
              <PlanetSolutionsWrapper>{displayedResult}</PlanetSolutionsWrapper>
            </PlanetWrapper>
          </Wrapper>
        ) : (
          <Wrapper>
            <PlanetWrapper
              style={{
                backgroundImage: `url('${planetImage}')`,
              }}
            >
              <PlanetSolutionsWrapper>{displayedResult}</PlanetSolutionsWrapper>
            </PlanetWrapper>
          </Wrapper>
        )}
      </PageBelowNavBar>
    </motion.div>
  );
}

export default SolutionPlanet;
