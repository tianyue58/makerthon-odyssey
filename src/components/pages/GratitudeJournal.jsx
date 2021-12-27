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
import GratitudeItem from "./GratitudeItem";

const FormContainer = styled(MainForm)`
  margin-top: 2%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
`;

function GratitudeJournal() {
  const { currentUser } = useAuth();
  const [recordings, setRecordings] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  async function loadUserRecordings() {
    const q = query(
      collection(db, "gratitudes"),
      where("user", "==", currentUser.uid)
    );
    const gratitudesSnap = await getDocs(q);
    const recordedGratitudes = [];
    gratitudesSnap.forEach((gratitude) =>
      recordedGratitudes.push(gratitude.data())
    );
    const defaultSnap = await getDoc(doc(db, "gratitudes", "default"));
    recordedGratitudes.push(defaultSnap.data());

    setRecordings(recordedGratitudes);
  }

  useEffect(() => loadUserRecordings(), []);

  async function handleRemove(target) {
    console.log("to be removed " + target);
    const filteredRecordings = recordings.filter(
      (recording) => recording.id !== target
    );
    setRecordings(filteredRecordings);
    navigate("/GratitudeJournal", { state: "refresh" });
    await deleteDoc(doc(db, "gratitudes", target));
  }

  const displayedResult =
    recordings &&
    recordings.map((gratitude, index) => {
      return (
        <GratitudeItem
          gratitudeObject={gratitude}
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
        <FormContainer height="90%">{displayedResult}</FormContainer>
      </PageBelowNavBar>
    </motion.div>
  );
}

export default GratitudeJournal;
