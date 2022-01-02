import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import background from "../../backgrounds/choose-page-galaxy.mp4";
import {
  VideoBackground,
  WholePage,
  Wrapper,
  Button,
} from "../../styles/globalStyles";
import {
  TextContainer,
  LinkContainer,
  NavigationButtonContainer,
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
    setAboutMyself(location.state);
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
      if (event === "At School")
        navigate("/EmotionPlanet", { state: "Asteroid325-travel" });
      else if (event === "At Work/Internship")
        navigate("/EmotionPlanet", { state: "Asteroid326-travel" });
      else navigate("/EmotionPlanet", { state: "Asteroid327-travel" });
    } else {
      if (event === "At School")
        navigate("/EmotionPlanet", { state: "Asteroid328-travel" });
      else if (event === "At Work/Internship")
        navigate("/EmotionPlanet", { state: "Asteroid329-travel" });
      else navigate("/EmotionPlanet", { state: "Asteroid330-travel" });
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
