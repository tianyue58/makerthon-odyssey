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
import { containerVariants } from "../../styles/animatedStyles";
import {
  Button,
  LightButton,
  PageBelowNavBar,
  VideoBackground,
} from "../../styles/globalStyles";
import "../../styles/animations.css";
import RelicItem from "./RelicItem";
import { LinkContainer } from "../../styles/featurePageStyles";
import {
  RelicsWrapper,
  LeaveARelicButton,
  NavigationButtons,
} from "../../styles/relicPageStyles";

function ViewRelics() {
  const location = useLocation();
  const currentPlanet = location.state;
  const [relics, setRelics] = useState();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState();
  const [displayedResult, setDisplayedResult] = useState();

  async function loadRelics() {
    const q = query(
      collection(db, "relics"),
      where("planet", "==", currentPlanet),
      where("approved", "==", true)
    );
    const relicsSnap = await getDocs(q);
    const fetchedRelicsData = [];
    relicsSnap.forEach((relic) => {
      fetchedRelicsData.push(relic.data());
    });
    const max = Math.ceil(fetchedRelicsData.length / 3);
    setMaxPage(max);

    const displayedRelics = await Promise.all(
      fetchedRelicsData.map((relic, index) => {
        return <RelicItem relicObject={relic} key={index} />;
      })
    );
    setRelics(displayedRelics);
    setDisplayedResult(displayedRelics.slice(0, 3));
  }

  useEffect(() => loadRelics(), []);

  useEffect(() => displayedResult && handleRefresh(), [currentPage]);

  const handleRefresh = () => {
    const start = currentPage * 3;
    const end = Math.min(currentPage * 3 + 3, relics.length);
    relics && setDisplayedResult(relics.slice(start, end));
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
            <LightButton onClick={() => setCurrentPage(currentPage - 1)}>
              Prev
            </LightButton>
          )}
          {currentPage < maxPage - 1 && (
            <LightButton onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </LightButton>
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
