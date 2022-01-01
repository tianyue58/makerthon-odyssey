import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { getDocs, collection, where, query } from "firebase/firestore";
import { db } from "../../firebase";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import background from "../../backgrounds/relic-page-background.mp4";
import { containerVariants } from "../../styles/animatedStyles";
import {
  PreviousIcon,
  NextIcon,
  PageBelowNavBar,
  VideoBackground,
} from "../../styles/globalStyles";
import "../../styles/animations.css";
import RelicItem from "./RelicItem";
import {
  RelicsWrapper,
  LeaveARelicButton,
  IconWrapper,
  BackButton,
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
        <BackButton
          onClick={() =>
            navigate("/EmotionPlanet", {
              state: currentPlanet.replace(/\s+/g, ""),
            })
          }
        >
          Back
        </BackButton>
        <RelicsWrapper>{displayedResult}</RelicsWrapper>
        <IconWrapper width="25%">
          {currentPage > 0 && (
            <PreviousIcon onClick={() => setCurrentPage(currentPage - 1)} />
          )}
          {currentPage < maxPage - 1 && (
            <NextIcon onClick={() => setCurrentPage(currentPage + 1)} />
          )}
        </IconWrapper>
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
