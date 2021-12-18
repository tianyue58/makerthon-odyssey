import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import background from "../../backgrounds/home-galaxy.mp4";
import {
  LightButton,
  VideoBackground,
  WholePage,
  Wrapper,
} from "../../styles/globalStyles";
import { LinkContainer, TextContainer } from "../../styles/featurePageStyles";

function Home() {
  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <WholePage>
        <Wrapper>
          <TextContainer>
            Hey Earthling! <br />
            How are you feeling today?
          </TextContainer>
          <LinkContainer>
            <Link to="/ChooseProblem">
              <LightButton>I'm not doing very well...</LightButton>
            </Link>
            <Link to="/ChooseProblem">
              <LightButton>
                I'm fine, but there's someone I'm worried about...
              </LightButton>
            </Link>
            <Link to="/ChooseProblem">
              <LightButton>I'm fine, and I want to stay this way!</LightButton>
            </Link>
          </LinkContainer>
        </Wrapper>
      </WholePage>
    </>
  );
}

export default Home;
