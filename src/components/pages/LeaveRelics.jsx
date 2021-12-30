import background from "../../backgrounds/lightbulb-background.mp4";
import {
  getDoc,
  doc,
  updateDoc,
  arrayRemove,
  addDoc,
  collection,
} from "firebase/firestore";
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import {
  IconButton,
  RoundButton,
  Button,
  VideoBackground,
  PageBelowNavBar,
} from "../../styles/globalStyles";
import { containerVariants } from "../../styles/animatedStyles";
import { db } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import {
  GroupInput,
  MainPageRight,
  MessageBlock,
  SubPageLeft,
  Title,
} from "../../styles/authenticationPageStyles";
import { LinkContainer, TextContainer } from "../../styles/featurePageStyles";
import { Wrapper } from "../../styles/globalStyles";
import {
  RelicInput,
  RelicContainer,
  RelicTitle,
  RelicContentWrapper,
} from "../../styles/relicPageStyles";
import PopupNotification from "../PopupNotification";

const PageLeft = styled(SubPageLeft)`
  left: 5%;
  width: 35%;
  background-color: transparent;
  opacity: 1;
`;

const PageRight = styled(MainPageRight)`
  left: 40%;
  width: 60%;
  background-color: transparent;
  opacity: 1;
`;

function LeaveRelics() {
  const location = useLocation();
  const titleRef = useRef();
  const contentRef = useRef();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [isSuccess, setIsSuccess] = useState();
  const planet = location.state;

  async function handleUpload(title, content) {
    const docRef = await addDoc(collection(db, "relics"), {
      title: title,
      content: content,
      user: currentUser.uid,
      planet: planet,
      approved: false,
    });

    await updateDoc(docRef, { id: docRef.id });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const promises = [];

    promises.push(
      handleUpload(titleRef.current.value, contentRef.current.value)
    );

    Promise.all(promises)
      .catch((e) => {
        setIsSuccess(false);
      })
      .finally(() => {
        setIsSuccess(true);
        setLoading(false);
      });
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
      <PageBelowNavBar>
        {isSuccess ? (
          <PopupNotification status={isSuccess} planet={planet} />
        ) : (
          <>
            <PageLeft>
              <TextContainer style={{ color: "Gold" }}>
                People appreciate and never forget that helping hand especially
                when times are tough...
              </TextContainer>
            </PageLeft>
            <PageRight>
              <RelicContainer>
                <RelicTitle>
                  <RelicInput
                    style={{ overflow: "hidden" }}
                    ref={titleRef}
                    placeholder="Give your solution a nice title..."
                  />
                </RelicTitle>
                <RelicContentWrapper>
                  <RelicInput
                    ref={contentRef}
                    placeholder="Briefly illustrate your solution here..."
                  />
                </RelicContentWrapper>
                <Button disabled={loading} onClick={handleSubmit}>
                  Submit
                </Button>
              </RelicContainer>
            </PageRight>
          </>
        )}
      </PageBelowNavBar>
    </motion.div>
  );
}

export default LeaveRelics;
