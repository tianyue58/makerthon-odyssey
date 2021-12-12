import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../backgrounds/choose-problem-galaxy.mp4";
import styled from "styled-components/macro";
import { VideoBackground } from "../../globalStyles";
import {
  TextContainer,
  LinkContainer,
  LightButton,
  InnerWrapper,
} from "../../globalStyles";

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

  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <InnerWrapper>
        {displayEmotion ? (
          <>
            <TextContainer>Tell me how you feel...</TextContainer>
            <LinkContainer>
              <LightButton onClick={() => handleSelectEmotion("Sad")}>
                Sad
              </LightButton>
              <LightButton onClick={() => handleSelectEmotion("Anxious")}>
                Anxious
              </LightButton>
              <LightButton onClick={() => handleSelectEmotion("Angry")}>
                Angry
              </LightButton>
            </LinkContainer>
          </>
        ) : (
          <>
            {displayEvent ? (
              <>
                <TextContainer>What makes you feel this way...?</TextContainer>
                <LinkContainer>
                  <LightButton
                    onClick={() => handleSelectEvent("Relationship")}
                  >
                    Relationship
                  </LightButton>
                  <LightButton onClick={() => handleSelectEvent("Exam")}>
                    Exam
                  </LightButton>
                  <LightButton onClick={() => handleSelectEvent("Financial")}>
                    Financial
                  </LightButton>
                </LinkContainer>
              </>
            ) : (
              <>
                <TextContainer>
                  You're {emotion} about {event}
                </TextContainer>
                <Link to="/EmotionPlanet">
                  <LightButton>Confirm Emotion</LightButton>
                </Link>
              </>
            )}
          </>
        )}
      </InnerWrapper>
    </>
  );
}

export default ChooseProblem;
