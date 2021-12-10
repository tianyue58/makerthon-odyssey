import React from "react";
import background from "../../backgrounds/choose-problem-galaxy.mp4";
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

function ChooseProblem() {
  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <InnerWrapper>
        <TextContainer>
          Tell me how you feel... <br />
          And why you feel this way?
        </TextContainer>
      </InnerWrapper>
    </>
  );
}

export default ChooseProblem;
