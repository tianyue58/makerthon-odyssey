import React from "react";
import background from "../../backgrounds/home-galaxy.mp4";
import styled from "styled-components/macro";
import { VideoBackground } from "../../globalStyles";
import { TextContainer } from "../../globalStyles";

const InnerWrapper = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <InnerWrapper>
        <TextContainer>
          Hey Earthing! <br />
          How are you feeling today?
        </TextContainer>
      </InnerWrapper>
    </>
  );
}

export default Home;
