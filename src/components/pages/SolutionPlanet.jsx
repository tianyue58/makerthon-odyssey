import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import background from "../../backgrounds/emotion-planet-galaxy.mp4";
import { containerVariants } from "../../styles/animatedStyles";
import {
  PageBelowNavBar,
  VideoBackground,
  WholePage,
  Wrapper,
} from "../../styles/globalStyles";
import SolutionIcon from "./SolutionIcon";

const PlanetWrapper = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  background-color: transparent;
`;

function SolutionPlanet() {
  const [solutions, setSolutions] = useState();
  const location = useLocation();
  const { planetImage, solutionCollectionName } = location.state;

  async function getSolutions() {
    const solutionsSnap = await getDocs(collection(db, solutionCollectionName));
    const solutionArray = [];
    solutionsSnap.forEach((solution) => solutionArray.push(solution.data()));
    setSolutions(solutionArray);
  }

  useEffect(() => getSolutions(), []);

  const displayedResult =
    solutions &&
    solutions.map((solution) => {
      return <SolutionIcon solutionObject={solution} />;
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
        <Wrapper
          style={{
            backgroundImage: `url('${planetImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            width: "50%",
            left: "25%",
            right: "25%",
          }}
        >
          <PlanetWrapper>{displayedResult}</PlanetWrapper>
        </Wrapper>
      </PageBelowNavBar>
    </motion.div>
  );
}

export default SolutionPlanet;
