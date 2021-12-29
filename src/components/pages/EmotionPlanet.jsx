import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import travelling from "../../backgrounds/go-to-planet.mp4";
import background from "../../backgrounds/emotion-planet-galaxy.mp4";
import styled from "styled-components/macro";
import {
  LightButton,
  VideoBackground,
  WholePage,
  Wrapper,
} from "../../styles/globalStyles";
import { TextContainer, LinkContainer } from "../../styles/featurePageStyles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { containerVariants } from "../../styles/animatedStyles";
import "../../styles/animations.css";
import { db, storage } from "../../firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { ProfilePhoto } from "../../styles/profilePageStyles";
import { useAuth } from "../context/AuthContext";
import SolutionPlanet from "./SolutionPlanet";
import talk from "../../images/talk.png";
import { getDefaultNormalizer } from "@testing-library/react";

const TalkIconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  bottom: -36%;
  left: 1%;
  width: 14%;
  height: 14%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function EmotionPlanet() {
  const [displayPlanet, setDisplayPlanet] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [solution, setSolution] = useState();
  const [calculate, setCalculate] = useState(false);

  const location = useLocation();

  const [planetRef, setPlanetRef] = useState();

  const [name, setName] = useState();
  const [people, setPeople] = useState();
  const [image, setImage] = useState();
  const [solutionCollectionName, setSolutionCollectionName] = useState();
  const [solutionPlanetImage, setSolutionPlanetImage] = useState();
  const navigate = useNavigate();

  const isAboutOneself = (name) => {
    if (
      name === "Asteroid 325" ||
      name === "Asteroid 326" ||
      name === "Asteroid 327"
    ) {
      navigate("/TalkingTips");
    } else {
      navigate("/TalkingTipsOther");
    }
  };

  useEffect(() => calculate && isAboutOneself(name), [calculate]);

  useEffect(() => {
    const currentPlanet = location.state;
    setPlanetRef(doc(db, "planets", currentPlanet));
  }, []);

  useEffect(() => planetRef && getPlanet(), [planetRef]);

  async function getPlanet() {
    const planetSnap = await getDoc(planetRef);
    if (planetSnap.exists()) {
      const data = planetSnap.data();
      setName(data.name);
      setPeople(data.visitors.length);
      const imageRef = ref(storage, data.image);
      getDownloadURL(imageRef).then((url) => setImage(url));
      setSolutionPlanetImage(data.solutionPlanet);
      setSolutionCollectionName(data.solution);
    }
  }

  async function handleClick() {
    await updateVisitorCount();
    navigate("/SolutionPlanet", {
      state: {
        planetImage: solutionPlanetImage,
        planetName: name,
        solutionCollectionName: solutionCollectionName,
      },
    })
  }



  //visit count
  const { currentUser } = useAuth();


  async function updateVisitorCount() {
  
    const planetSnap = await getDoc(planetRef);
    if (planetSnap.exists) {
      const visitors = planetSnap.data().visitors;
      if (!visitors.includes(currentUser.uid)) {
        updateDoc(planetRef, {
          visitors: arrayUnion(currentUser.uid),
        })
      }     
    }
  }

  


  return (
    <>
      {!displayPlanet ? (
        <VideoBackground
          autoPlay
          muted
          playsInline
          onEnded={() => setDisplayPlanet(true)}
        >
          <source src={travelling} type="video/mp4" />
        </VideoBackground>
      ) : (
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
          <WholePage>
            {showDetail ? (
              <>
                {showSolution ? (
                  <Wrapper>
                    <TextContainer>{solution}</TextContainer>
                    <Link to="/">
                      <LightButton>Go it!</LightButton>
                    </Link>
                  </Wrapper>
                ) : (
                  <Wrapper></Wrapper>
                )}
              </>
            ) : (
              <Wrapper alignment="row">
                <Wrapper>
                  <ProfilePhoto src={image} alt="planet"></ProfilePhoto>
                  <TextContainer>
                    You're on {name}
                    <br />
                    Until now, {people} earthlings have visited this
                    planet.
                    <br />
                    They have experienced the same emotion as you <br />
                  </TextContainer>
                  <LightButton
                    onClick={() => handleClick()}
                  >
                    Explore the planet
                  </LightButton>
                </Wrapper>
                <TalkIconWrapper
                  style={{
                    backgroundImage: `url('${talk}')`,
                  }}
                  onClick={() => setCalculate(true)}
                  className="planet"
                ></TalkIconWrapper>
              </Wrapper>)
            }
          </WholePage>
        </motion.div>
      )}
    </>
  );
}

export default EmotionPlanet;
