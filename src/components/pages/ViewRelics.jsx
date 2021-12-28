import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getDocs,
  collection,
  updateDoc,
  arrayUnion,
  doc,
  arrayRemove,
  getDoc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import background from "../../backgrounds/relic-page-background.mp4";
import {
  containerVariants,
  refreshContainer,
} from "../../styles/animatedStyles";
import {
  Button,
  LightButton,
  PageBelowNavBar,
  VideoBackground,
  Wrapper,
  IconButton,
  LikeIcon,
  IconButtonContainer,
} from "../../styles/globalStyles";
import "../../styles/animations.css";
import { useAuth } from "../context/AuthContext";
import SolutionItem from "./SolutionItem";
import { MainForm } from "../../styles/profilePageStyles";
import RelicItem from "./RelicItem";
import { LinkContainer } from "../../styles/featurePageStyles";

const RelicsWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(1, 400px);
  background-color: transparent;
  padding: 5%;
`;

const LeaveARelicButton = styled(Button)`
  position: absolute;
  bottom: 5%;
  right: 2%;
  width: 150px;
`;

const NavigationButtons = styled(LinkContainer)`
  position: absolute;
  bottom: 0;
  right: 50%;
`;

function ViewRelics() {
  const location = useLocation();
  const currentPlanet = location.state;
  const [relics, setRelics] = useState();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState();
  const [currentContent, setCurrentContent] = useState();

  async function loadRelics() {
    const q = query(
      collection(db, "relics"),
      where("planet", "==", currentPlanet),
      where("approved", "==", true)
    );
    const relicsSnap = await getDocs(q);
    const fetchedRelicsData = [];
    relicsSnap.forEach((relic) => fetchedRelicsData.push(relic.data()));
    setRelics(fetchedRelicsData);
    const max = Math.ceil(fetchedRelicsData.length / 3);
    setMaxPage(max);
    setCurrentContent(fetchedRelicsData.slice(0, 3));
  }

  useEffect(() => loadRelics(), []);

  //   const pagination = () => {
  //     const noOfPages = relics.length / 3;
  //     const pages = [];
  //     for (let i = 0; i < noOfPages; i = i + 3) {
  //       const page = [];
  //       for (let j = 0; j < 3; j++) page.push(displayedResult[i + j]);
  //       pages.push(page);
  //     }
  //     setAllPages(pages);
  //   };

  const displayedResult =
    currentContent &&
    currentContent.map((relic) => {
      return <RelicItem relicObject={relic} key={relic} />;
    });

  const handleClick = (pageToTurn) => {
    const newPage = currentPage + pageToTurn;
    setCurrentPage(newPage);
    const max = Math.min(newPage * 3 + 3, relics.length);
    setCurrentContent(relics.slice(newPage * 3, max));
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
      <PageBelowNavBar style={{ display: "flex", justifyContent: "center" }}>
        <RelicsWrapper>{displayedResult}</RelicsWrapper>
        <NavigationButtons>
          {currentPage > 0 && (
            <LightButton onClick={() => handleClick(-1)}>Prev</LightButton>
          )}
          {currentPage < maxPage - 1 && (
            <LightButton onClick={() => handleClick(1)}>Next</LightButton>
          )}
        </NavigationButtons>
        <LeaveARelicButton
          onClick={() => navigate("/LeaveRelics", { state: currentPlanet })}
        >
          Leave A Relic
        </LeaveARelicButton>
      </PageBelowNavBar>
    </motion.div>
  );
}

export default ViewRelics;
