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
import { PageBelowNavBar, VideoBackground } from "../../styles/globalStyles";
import "../../styles/animations.css";
import { useAuth } from "../context/AuthContext";
import { MainForm } from "../../styles/profilePageStyles";
import MyRelicItem from "./MyRelicItem";
import { RelicsContainer } from "../../styles/relicPageStyles";

function MyRelics() {
  const { currentUser } = useAuth();
  const [relics, setRelics] = useState();
  const navigate = useNavigate();

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
    setRelics(recordedRelics);
  }

  useEffect(() => loadUserRelics(), []);

  async function handleRemove(target) {
    const filteredRelics = relics.filter((relic) => relic.id !== target);
    setRelics(filteredRelics);
    navigate("/MyRelics", { state: "refresh" });
    await deleteDoc(doc(db, "relics", target));
  }

  const displayedResult =
    relics &&
    relics.map((relic, index) => {
      return (
        <MyRelicItem relicObject={relic} key={index} onRemove={handleRemove} />
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
        <RelicsContainer>{displayedResult}</RelicsContainer>
      </PageBelowNavBar>
    </motion.div>
  );
}

export default MyRelics;
