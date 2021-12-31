import background from "../../backgrounds/lightbulb-background.mp4";
import {
  getDoc,
  doc,
  updateDoc,
  arrayRemove,
  addDoc,
  collection,
} from "firebase/firestore";
import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import {
  IconButton,
  RoundButton,
  Button,
  VideoBackground,
  PageBelowNavBar,
  LightButton,
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
  RelicTitleInput,
  RelicContentInput,
  RelicContainer,
  RelicTitle,
  RelicContentWrapper,
} from "../../styles/relicPageStyles";
import PopupNotification from "../PopupNotification";
import { GiConsoleController } from "react-icons/gi";

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

const RelicTitleInputLarge = styled(RelicTitleInput)`
  max-height: 10%;
  width: 80%;
  margin: 2%;
  font-size: 150%;
`;

const BackButton = styled(LightButton)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: 80px;
`;

function LeaveRelics() {
  const location = useLocation();
  const navigate = useNavigate();
  const titleRef = useRef();
  const contentRef = useRef();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [isSuccess, setIsSuccess] = useState();
  const planet = location.state;
  const [isExceedingLimit, setIsExceedingLimit] = useState(false);

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

    const currentTitle = titleRef.current.value;
    const currentContent = contentRef.current.value;

    if (currentTitle.length == 0 || currentContent.length == 0) {
      alert("Title/Content should not be blank");
      return;
    }

    setLoading(true);
    const promises = [];

    promises.push(handleUpload(currentTitle, currentContent));

    Promise.all(promises)
      .catch((e) => {
        setIsSuccess(false);
      })
      .finally(() => {
        setIsSuccess(true);
        setLoading(false);
      });
  }

  const handleWordCount = (e) => {
    if (e.target.value.length == 60) setIsExceedingLimit(true);
    else setIsExceedingLimit(false);
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
      <PageBelowNavBar>
        {isSuccess ? (
          <PopupNotification status={isSuccess} planet={planet} />
        ) : (
          <>
            <PageLeft>
              <BackButton
                onClick={() => navigate("/ViewRelics", { state: planet })}
              >
                Back
              </BackButton>
              <TextContainer style={{ color: "Gold" }}>
                People appreciate and never forget that helping hand especially
                when times are tough...
              </TextContainer>
            </PageLeft>
            <PageRight>
              <RelicContainer>
                <RelicTitleInputLarge
                  ref={titleRef}
                  placeholder="Give your solution a nice title..."
                  maxLength={60}
                  warning={isExceedingLimit}
                  onChange={(e) => handleWordCount(e)}
                />

                <RelicContentWrapper>
                  <RelicContentInput
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
