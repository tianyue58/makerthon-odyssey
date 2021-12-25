import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import travelling from "../../backgrounds/go-to-planet.mp4";
import background from "../../backgrounds/emotion-planet-galaxy.mp4";
import styled from "styled-components/macro";
import {
    Title,
  } from "../../styles/authenticationPageStyles";
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
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { ProfilePhoto } from "../../styles/profilePageStyles";
import SolutionPlanet from "./SolutionPlanet";

const SolutionContainer = styled.div`
  margin: 10px 0 10px 0;
  padding: 10px 0 10px 20px;
  border: 1px solid transparent;
  border-radius: 1rem;
  background: white;
  opacity: 0.7;
  transition: 0.5s;
  &:hover {
    color: green;
    opacity: 0.9;
  }
  display: grid;
  width: 95%;
  grid-template-columns: 10% 20% 65% 5%;
  justify-content: center;
  align-items: center;
`;

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
  padding: 30% 15% 0 5%;
  font-size: 1.4em;
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

function TipsState() {
  const [displayPlanet, setDisplayPlanet] = useState(false);
  
  const location = useLocation();

  const [tipRef, setTipRef] = useState();

  const [name, setName] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const currentTip = location.state;
    setTipRef(doc(db, "tips", currentTip));
  }, []);

  useEffect(() => tipRef && getTip(), [tipRef]);

  async function getTip() {
    const tipSnap = await getDoc(tipRef);
    if (tipSnap.exists()) {
      const data = tipSnap.data();
      setName(data.name);
      setContent(data.content);
      const imageRef = ref(storage, data.icon);
      getDownloadURL(imageRef).then((url) => setImage(url));
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
          <Wrapper alignment="row">
            <SolutionContentWrapper>
              <Title>
                {name}
              </Title>
              <SolutionTextWrapper>
                {content}
              </SolutionTextWrapper> 
              <LightButton
              onClick={() =>
                navigate("/")
              }>
                  Got it!
                  </LightButton>
            </SolutionContentWrapper>
            <PlanetWrapper
              style={{
                backgroundImage: `url('${image}')`,
              }}
            >
              <PlanetSolutionsWrapper>{image}</PlanetSolutionsWrapper>
            </PlanetWrapper>
          </Wrapper>
        </motion.div>
      )}
    </>
  );
}

export default TipsState;
