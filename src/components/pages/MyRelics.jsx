import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getDocs,
  collection,
  doc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import background from "../../backgrounds/particle-background.mp4";
import {
  containerVariants,
  refreshContainer,
} from "../../styles/animatedStyles";
import {
  PageBelowNavBar,
  VideoBackground,
  PreviousIcon,
  NextIcon,
} from "../../styles/globalStyles";
import "../../styles/animations.css";
import { useAuth } from "../context/AuthContext";
import MyRelicItem from "./MyRelicItem";
import { RelicsWrapper, IconWrapper } from "../../styles/relicPageStyles";

function MyRelics() {
  const { currentUser } = useAuth();
  const [relics, setRelics] = useState();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState();
  const [displayedResult, setDisplayedResult] = useState();

  async function loadUserRelics() {
    const q = query(
      collection(db, "relics"),
      where("user", "==", currentUser.uid)
    );
    const relicsSnap = await getDocs(q);
    const recordedRelics = [];
    relicsSnap.forEach((relic) => {
      recordedRelics.push(relic.data());
    });
    const max = Math.ceil(recordedRelics.length / 3);
    setMaxPage(max);

    const displayedRelics = await Promise.all(
      recordedRelics.map((relic, index) => {
        return (
          <MyRelicItem
            relicObject={relic}
            key={index}
            onRemove={handleRemove}
          />
        );
      })
    );
    setRelics(displayedRelics);
    setDisplayedResult(displayedRelics.slice(0, 3));
  }

  useEffect(() => loadUserRelics(), []);

  useEffect(() => displayedResult && handleRefresh(), [currentPage]);

  const handleRefresh = () => {
    const start = currentPage * 3;
    const end = Math.min(currentPage * 3 + 3, relics.length);
    relics && setDisplayedResult(relics.slice(start, end));
  };

  async function handleRemove(target) {
    const filteredRelics = relics.filter((relic) => relic.id !== target);
    setRelics(filteredRelics);
    navigate("/MyRelics", { state: "refresh" });
    await deleteDoc(doc(db, "relics", target));
  }

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
        <IconWrapper width="25%">
          {currentPage > 0 && (
            <PreviousIcon onClick={() => setCurrentPage(currentPage - 1)} />
          )}
          {currentPage < maxPage - 1 && (
            <NextIcon onClick={() => setCurrentPage(currentPage + 1)} />
          )}
        </IconWrapper>
      </PageBelowNavBar>
    </motion.div>
  );
}

export default MyRelics;
