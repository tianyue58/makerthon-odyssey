import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useNavigate, useLocation } from "react-router-dom";
import background from "../../backgrounds/choose-page-galaxy.mp4";
import {
  VideoBackground,
  WholePage,
  Wrapper,
  Button,
  PageBelowNavBar,
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
import "../../styles/hoverTips.css";
import school from "../../images/icons/at-school-icon.png";
import work from "../../images/icons/at-work-icon.png";
import life from "../../images/icons/private-life-icon.png";

const IconContainer = styled.img`
  width: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-bottom: 5%;
`;

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

  const finalIcon =
    event === "At School"
      ? school
      : event === "At Work/Internship"
      ? work
      : life;

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
      <PageBelowNavBar>
        {displayEvent ? (
          <Wrapper>
            <TextContainer style={{ paddingBottom: "3%" }}>
              <p className="line anim-typewriter">
                {aboutMyself
                  ? "Where does the problem come from?"
                  : "How do you know him/her?"}
              </p>
            </TextContainer>
            <LinkContainer
              style={{ width: "80%" }}
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <Wrapper>
                <IconContainer src={school} alt="Avatar" />
                {AnimatedSelectionButton("At School", handleSelectEvent)}
              </Wrapper>
              <Wrapper>
                <IconContainer src={work} alt="Avatar" />
                {AnimatedSelectionButton(
                  "At Work/Internship",
                  handleSelectEvent
                )}
              </Wrapper>
              <Wrapper>
                <IconContainer src={life} alt="Avatar" />
                {AnimatedSelectionButton("In Private Life", handleSelectEvent)}
              </Wrapper>
            </LinkContainer>
            <NavigationButtonContainer>
              {event && <Button onClick={handleConfirmEvent}>NEXT</Button>}
            </NavigationButtonContainer>
          </Wrapper>
        ) : (
          <Wrapper>
            <IconContainer
              style={{ width: "18%", marginBottom: "2%" }}
              src={finalIcon}
              alt="Avatar"
            />
            <TextContainer>
              You're worrying about{" "}
              {aboutMyself ? "Your problem" : "Someone you know"} {event}
            </TextContainer>
            <NavigationButtonContainer
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Button onClick={handleBackToSelectEvent}>PREVIOUS</Button>
              <Button onClick={() => setCalculate(true)}>CONFIRM</Button>
            </NavigationButtonContainer>
          </Wrapper>
        )}
      </PageBelowNavBar>
    </motion.div>
  );
}

export default ChooseProblem;
