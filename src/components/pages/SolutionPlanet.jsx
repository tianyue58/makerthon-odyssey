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
import { containerVariants } from "../../styles/animatedStyles";
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
import SolutionIcon from "./SolutionIcon";
import {
  MainPageLeft,
  SubPageRight,
  Title,
} from "../../styles/authenticationPageStyles";
import "../../styles/animations.css";
import { useAuth } from "../context/AuthContext";
import magicBox from "../../gifs/magic-box.gif";

const PlanetWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const SolutionContentWrapper = styled.div`
  padding: 15% 5% 0 5%;
  width: 50%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SolutionTextWrapper = styled.div`
  width: 70%;
`;

const PlanetSolutionsWrapper = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  background-color: transparent;
`;

const BoxWrapper = styled.button`
  border: none;
  outline: none;
  background: none;
  position: absolute;
  bottom: 3%;
  right: 35%;
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${magicBox});
`;

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
    // solutionsSnap.forEach((solution) => {
    //   const currentSolutionRef = doc(db, solutionCollectionName, solution.id);
    //   updateDoc(currentSolutionRef, { likes: [], id: solution.id });
    // });
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
            </SolutionContentWrapper>
            <PlanetWrapper
              style={{
                backgroundImage: `url('${planetImage}')`,
              }}
            >
              <PlanetSolutionsWrapper>{displayedResult}</PlanetSolutionsWrapper>
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
              />
            </PlanetWrapper>
          </Wrapper>
        )}
      </PageBelowNavBar>
    </motion.div>
  );
}

export default SolutionPlanet;
