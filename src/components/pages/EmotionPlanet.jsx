import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import travelling from "../../backgrounds/go-to-planet.mp4";
import background from "../../backgrounds/emotion-planet.mp4";
import styled from "styled-components/macro";
import {
  LightButton,
  LinkContainer,
  VideoBackground,
} from "../../globalStyles";
import { TextContainer, InnerWrapper } from "../../globalStyles";

function EmotionPlanet() {
  const [displayPlanet, setDisplayPlanet] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [solution, setSolution] = useState("");

  //   useEffect(() => {
  //     let timer = setTimeout(() => setDisplayPlanet(true), 5000);
  //     return () => clearTimeout(timer);
  //   }, []);
  const solutionArray = ["Don't worry! No boyfriend, no problems :D", "Solution 2"]
  const handleDisplaySolution = (index) => {
    // const solution = "Don't worry! No boyfriend, no problems :D";
    const solution = solutionArray[index - 1];
    setSolution(solution);
    setShowSolution(true);
  };

  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      {showDetail ? (
        <>
          {showSolution ? (
            <InnerWrapper>
              <TextContainer>{solution}</TextContainer>
              <Link to="/">
                <LightButton>Go it!</LightButton>
              </Link>
            </InnerWrapper>
          ) : (
            <InnerWrapper>
              <TextContainer>
                Here are some relics left by those who had visited this planet
                before... <br />
                Pick one to explore!
              </TextContainer>
              <LinkContainer>
                <LightButton onClick={() => handleDisplaySolution("1")}>
                  Solution 1
                </LightButton>
                <LightButton onClick={() => handleDisplaySolution("2")}>
                  Solution 2
                </LightButton>
                <LightButton>Solution 3</LightButton>
              </LinkContainer>
            </InnerWrapper>
          )}
        </>
      ) : (
        <InnerWrapper>
          <TextContainer>
            You're on Planet XYZ, 1000 light years away from the Earth <br />
            Currently there are 100 other earthlings on this planet, <br />
            who are experiencing the same emotion as you <br />
            Click to explore more
          </TextContainer>
          <LightButton onClick={() => setShowDetail(true)}>
            Explore the planet
          </LightButton>
        </InnerWrapper>
      )}
      ; ;
    </>
  );
}

export default EmotionPlanet;
