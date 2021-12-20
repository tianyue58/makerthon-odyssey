import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import PlanetsUID from "../../data/PlanetData";
import { ProfilePhoto } from "../../styles/profilePageStyles";

function EmotionPlanet() {
  const [displayPlanet, setDisplayPlanet] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [solution, setSolution] = useState();

  const handleDisplaySolution = (index) => {
    const solution = "Don't worry! No boyfriend, no problems :D";
    setSolution(solution);
    setShowSolution(true);
  };

  const location = useLocation();

  const [planetRef, setPlanetRef] = useState();

  const [name, setName] = useState();
  const [people, setPeople] = useState();
  const [image, setImage] = useState();
  const [solutions, setSolutions] = useState();

  useEffect(() => {
    const planetUid = PlanetsUID.get(location.state);
    setPlanetRef(doc(db, "planets", planetUid));
  }, []);

  useEffect(() => planetRef && getPlanet(), [planetRef]);

  async function getPlanet() {
    const planetSnap = await getDoc(planetRef);
    if (planetSnap.exists()) {
      const data = planetSnap.data();
      setName(data.name);
      setPeople(data.people);
      const imageRef = ref(storage, data.image);
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
                  <Wrapper>
                    <TextContainer>
                      Here are some relics left by those who had visited this
                      planet before... <br />
                      Pick one to explore!
                    </TextContainer>
                    <LinkContainer>
                      <LightButton onClick={() => handleDisplaySolution("1")}>
                        Solution 1
                      </LightButton>
                      <LightButton>Solution 2</LightButton>
                      <LightButton>Solution 3</LightButton>
                    </LinkContainer>
                  </Wrapper>
                )}
              </>
            ) : (
              <Wrapper>
                <ProfilePhoto src={image} alt="planet"></ProfilePhoto>
                <TextContainer>
                  You're on {name}
                  <br />
                  Currently there are {people} other earthlings on this planet,{" "}
                  <br />
                  who are experiencing the same emotion as you <br />
                </TextContainer>
                <LightButton onClick={() => setShowDetail(true)}>
                  Explore the planet
                </LightButton>
              </Wrapper>
            )}
          </WholePage>
        </motion.div>
      )}
    </>
  );
}

export default EmotionPlanet;
