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
} from "firebase/firestore";
import { db } from "../../firebase";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import background from "../../backgrounds/emotion-planet-galaxy.mp4";
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

function MyCollections() {
  const { currentUser } = useAuth();
  const userRef = doc(db, "users", currentUser.uid);
  const [collections, setCollections] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  async function loadUserCollections() {
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      const collectedSolutions = [];
      data.likedSolutions.forEach((solution) =>
        collectedSolutions.push(solution)
      );
      setCollections(collectedSolutions);
    }
  }

  useEffect(() => loadUserCollections(), []);

  const handleRemove = (solutionRef, solutionObject) => {
    const filteredCollection = collections.filter(
      (solution) => solution.name !== solutionObject.name
    );
    setCollections(filteredCollection);
    navigate("/MyCollections", { state: "refresh" });
    updateDoc(solutionRef, {
      likes: arrayRemove(currentUser.uid),
    }).then(
      updateDoc(userRef, {
        likedSolutions: arrayRemove(solutionObject),
      })
    );
  };

  const displayedResult =
    collections &&
    collections.map((solution, index) => {
      return (
        <SolutionItem
          solutionObject={solution}
          key={index}
          onRemove={handleRemove}
        />
      );
    });

  return (
    <motion.div
      className="page"
      variants={
        location.state === "refresh" ? refreshContainer : containerVariants
      }
      initial="hidden"
      animate="visible"
    >
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <PageBelowNavBar>
        <MainForm height="95%">{displayedResult}</MainForm>
      </PageBelowNavBar>
    </motion.div>
  );
}

export default MyCollections;
