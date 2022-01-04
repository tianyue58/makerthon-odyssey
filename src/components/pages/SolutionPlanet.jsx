import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { containerVariants } from "../../styles/animatedStyles";
import {
  PageBelowNavBar,
  VideoBackground,
  Wrapper,
  IconButton,
  LikeIcon,
  IconButtonContainer,
} from "../../styles/globalStyles";
import SolutionIcon from "./SolutionIcon";
import { Title } from "../../styles/authenticationPageStyles";
import "../../styles/animations.css";
import { useAuth } from "../context/AuthContext";
import {
  BackIconWrapper,
  DiscoverContainer,
} from "../../styles/featurePageStyles";
import backToPlanet from "../../images/backToPlanet.png";
import magicBox from "../../gifs/magic-box.gif";
import staticBox from "../../images/magic-box-static.png";
import discover from "../../images/discover-icon.png";
import question from "../../images/question.png";
import "../../styles/hoverTips.css";

import {
  PlanetSolutionsWrapper,
  PlanetWrapper,
  SolutionContentWrapper,
  SolutionTextWrapper,
  BoxWrapper,
} from "../../styles/featurePageStyles";

function SolutionPlanet() {
  const [planetName, setPlanetName] = useState();
  const [solutionCollectionName, setSolutionCollectionName] = useState();
  const [solutions, setSolutions] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const [planetImage, setPlanetImage] = useState();
  const [showContent, setShowContent] = useState(false);
  const [currentSolution, setCurrentSolution] = useState();
  const { currentUser } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [noOfLikes, setNoOfLikes] = useState();
  const userRef = doc(db, "users", currentUser.uid);

  async function componentOnMount() {
    const { planetImage, solutionCollectionName, planetName } = location.state;
    setPlanetImage(planetImage);
    setSolutionCollectionName(solutionCollectionName);
    setPlanetName(planetName);
    const solutionsSnap = await getDocs(collection(db, solutionCollectionName));
    const solutionArray = [];
    solutionsSnap.forEach((solution) => solutionArray.push(solution.data()));
    setSolutions(solutionArray);
  }

  useEffect(() => componentOnMount(), []);

  const handleShowContent = (index) => {
    setIsLiked(false);
    const solution = solutions[index];
    setShowContent(true);
    setCurrentSolution(solution);
    const likeStatus = solution.likes;
    setNoOfLikes(likeStatus.length);
    if (likeStatus != null) setIsLiked(likeStatus.includes(currentUser.uid));
  };

  async function updateRatingCount() {
    const currentSolutionRef = doc(
      db,
      solutionCollectionName,
      currentSolution.id
    );
    const currentSolutionObject = {
      collection: solutionCollectionName,
      document: currentSolution.id,
    };
    const solutionSnap = await getDoc(currentSolutionRef);
    if (solutionSnap.exists) {
      const likeStatus = solutionSnap.data().likes;
      if (likeStatus && likeStatus.includes(currentUser.uid)) {
        updateDoc(currentSolutionRef, {
          likes: arrayRemove(currentUser.uid),
        })
          .then(setIsLiked(false))
          .then(setNoOfLikes(noOfLikes - 1))
          .then(
            updateDoc(userRef, {
              likedSolutions: arrayRemove(currentSolutionObject),
            })
          );
      } else {
        updateDoc(currentSolutionRef, {
          likes: arrayUnion(currentUser.uid),
        })
          .then(setIsLiked(true))
          .then(setNoOfLikes(noOfLikes + 1))
          .then(
            updateDoc(userRef, {
              likedSolutions: arrayUnion(currentSolutionObject),
            })
          );
      }
    }
  }

  const displayedResult =
    solutions &&
    solutions.map((solution, index) => {
      return (
        <SolutionIcon
          solutionObject={solution}
          key={index}
          index={index}
          onClick={handleShowContent}
        />
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
        {showContent ? (
          <Wrapper alignment="row">
            <SolutionContentWrapper
              className="slideInLeft"
              key={currentSolution.id}
            >
              <Title
                as={motion.h1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {currentSolution.name}
              </Title>
              <SolutionTextWrapper
                as={motion.div}
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  duration: 2.5,
                  delay: 1,
                }}
              >
                {currentSolution.content}
              </SolutionTextWrapper>
              <IconButtonContainer
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <IconButton onClick={() => updateRatingCount()}>
                  <LikeIcon liked={isLiked} />
                </IconButton>
                <p>Liked by: {noOfLikes}</p>
              </IconButtonContainer>
              <DiscoverContainer
                className="discoverContainer"
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2 }}
              >
                <img src={discover} alt="Avatar" class="discoverImage planet" />
                <div class="discoverTip">
                  <img
                    class="previewImage"
                    src={
                      currentSolution.linkPreview
                        ? currentSolution.linkPreview
                        : question
                    }
                    onClick={() => window.open(currentSolution.link)}
                    alt="alt"
                  />
                </div>
              </DiscoverContainer>
            </SolutionContentWrapper>
            <PlanetWrapper
              style={{
                backgroundImage: `url('${planetImage}')`,
              }}
            >
              <PlanetSolutionsWrapper>{displayedResult}</PlanetSolutionsWrapper>
              <BoxWrapper
                as={motion.button}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                onClick={() => navigate("/ViewRelics", { state: planetName })}
                style={{ backgroundImage: `url('${staticBox}')` }}
              />
            </PlanetWrapper>
          </Wrapper>
        ) : (
          <Wrapper>
            <PlanetWrapper
              style={{
                backgroundImage: `url('${planetImage}')`,
              }}
            >
              <PlanetSolutionsWrapper>{displayedResult}</PlanetSolutionsWrapper>
              <BoxWrapper
                as={motion.button}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                onClick={() => navigate("/ViewRelics", { state: planetName })}
                style={{ backgroundImage: `url('${magicBox}')` }}
              />
            </PlanetWrapper>
          </Wrapper>
        )}
        <BackIconWrapper
          style={{
            backgroundImage: `url('${backToPlanet}')`,
            bottom: "10%",
            left: 0,
          }}
          onClick={() =>
            navigate("/EmotionPlanet", {
              state: planetName.replace(/\s+/g, ""),
            })
          }
          className="planet"
        />
      </PageBelowNavBar>
    </motion.div>
  );
}

export default SolutionPlanet;
