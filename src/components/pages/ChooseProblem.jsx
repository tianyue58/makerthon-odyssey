import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import background from "../../backgrounds/choose-page-galaxy.mp4";
import styled from "styled-components/macro";
import {
  VideoBackground,
  WholePage,
  LightButton,
  Wrapper,
  Button,
} from "../../styles/globalStyles";
import {
  TextContainer,
  LinkContainer,
  NavigationButtonContainer,
  SelectedLightButton,
} from "../../styles/featurePageStyles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import {
  containerVariants,
  AnimatedSelectionButton,
} from "../../styles/animatedStyles";
import "../../styles/animations.css";

function ChooseProblem() {
  const [displayEvent, setDisplayEvent] = useState(true);
  const [event, setEvent] = useState("");
  const [calculate, setCalculate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [aboutMyself, setAboutMyself] = useState();

  const componentOnMount = () => {
    const { aboutMyself } = location.state;
    setAboutMyself(aboutMyself);
  };

  const handleSelectEvent = (event) => {
    setEvent(event);
  };

  const handleConfirmEvent = () => {
    setDisplayEvent(false);
  };

  const handleBackToSelectEvent = () => {
    setEvent("");
    setDisplayEvent(true);
  };

  const calculateDestination = (event) => {
    if (aboutMyself) {
      if (event === "School")
        navigate("/EmotionPlanet", { state: "Asteroid325" });
      else if (event === "Work/Internship")
        navigate("/EmotionPlanet", { state: "Asteroid326" });
      else navigate("/EmotionPlanet", { state: "Asteroid327" });
    } else {
      if (event === "School")
        navigate("/EmotionPlanet", { state: "Asteroid328" });
      else if (event === "Work/Internship")
        navigate("/EmotionPlanet", { state: "Asteroid329" });
      else navigate("/EmotionPlanet", { state: "Asteroid330" });
    }
  };

  useEffect(() => componentOnMount(), []);

  useEffect(() => calculate && calculateDestination(event), [calculate]);

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
      <WholePage>
        {displayEvent ? (
          <Wrapper>
            <TextContainer>
              {aboutMyself
                ? "Where does the problem come from?"
                : "How do you know him/her?"}
            </TextContainer>
            <LinkContainer>
              {AnimatedSelectionButton("At School", handleSelectEvent)}
              {AnimatedSelectionButton("At Work/Internship", handleSelectEvent)}
              {AnimatedSelectionButton("In Private Life", handleSelectEvent)}
            </LinkContainer>
            <NavigationButtonContainer>
              {event && <Button onClick={handleConfirmEvent}>NEXT</Button>}
            </NavigationButtonContainer>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextContainer>
              You're worrying about{" "}
              {aboutMyself ? "Your problem" : "Someone you know"} {event}
            </TextContainer>
            <NavigationButtonContainer>
              <Button onClick={handleBackToSelectEvent}>PREVIOUS</Button>
              <Button onClick={() => setCalculate(true)}>CONFIRM</Button>
            </NavigationButtonContainer>
          </Wrapper>
        )}
      </WholePage>
    </motion.div>
  );
}

export default ChooseProblem;
