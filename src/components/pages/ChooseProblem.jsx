import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../backgrounds/choose-problem-galaxy.mp4";
import styled from "styled-components/macro";
import {
  VideoBackground,
  WholePage,
  LightButton,
  Wrapper,
} from "../../styles/globalStyles";
import { TextContainer, LinkContainer } from "../../styles/featurePageStyles";

function ChooseProblem() {
  const [displayEmotion, setDisplayEmotion] = useState(true);
  const [emotion, setEmotion] = useState("");
  const [displayEvent, setDisplayEvent] = useState(false);
  const [event, setEvent] = useState("");

  const handleSelectEmotion = (emotion) => {
    setEmotion(emotion);
    setDisplayEmotion(false);
    setDisplayEvent(true);
  };

  const handleSelectEvent = (event) => {
    setEvent(event);
    setDisplayEvent(false);
  };

  // let myHashMap = new Map([
  //   [work]
  // ])

  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <WholePage>
        {displayEmotion ? (
          <Wrapper>
            <TextContainer>Tell me how you feel...</TextContainer>
            <LinkContainer>
              <LightButton onClick={() => handleSelectEmotion("a bit sad")}>
                a bit sad...
              </LightButton>
              <LightButton onClick={() => handleSelectEmotion("very sad")}>
                very sad...
              </LightButton>
              {/* <LightButton onClick={() => handleSelectEmotion("Angry")}>
                Angry
              </LightButton> */}
            </LinkContainer>
          </Wrapper>
        ) : (
          <>
            {displayEvent ? (
              <Wrapper>
                <TextContainer>What makes you feel this way...?</TextContainer>
                <LinkContainer>
                  <LightButton onClick={() => handleSelectEvent("Study")}>
                    Study
                  </LightButton>
                  <LightButton
                    onClick={() => handleSelectEvent("Work/Internship")}
                  >
                    Work/Internship
                  </LightButton>
                  <LightButton
                    onClick={() => handleSelectEvent("Private life")}
                  >
                    Private life
                  </LightButton>
                </LinkContainer>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextContainer>
                  You're {emotion} about {event}
                </TextContainer>
                <Link to="/EmotionPlanet">
                  <LightButton>Confirm Emotion</LightButton>
                </Link>
              </Wrapper>
            )}
          </>
        )}
      </WholePage>
    </>
  );
}

export default ChooseProblem;
