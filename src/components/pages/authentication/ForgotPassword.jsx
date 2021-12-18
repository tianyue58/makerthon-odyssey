import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import styled from "styled-components/macro";
import background from "../../../backgrounds/sign-up-galaxy.mp4";
import {
  Title,
  Form,
  GroupInput,
  MessageBlock,
  StyledLink,
  Card,
} from "../../../styles/authenticationPageStyles";
import {
  Button,
  PageBelowNavBar,
  VideoBackground,
  Wrapper,
  ToolTip,
  ToolTipText,
  QuestionIcon,
  TitleWrapper,
} from "../../../styles/globalStyles";

const CardWithBackground = styled(Card)`
  background: lightyellow;
  opacity: 80%;
  width: 40%;
  border: 1px solid transparent;
  border-radius: 2rem;
`;

const SmallCardWrapper = styled(Wrapper)`
  justify-content: flex-start;
  top: 15%;
`;

const Question = styled(QuestionIcon)`
  top: -10px;
  right: -40px;
  width: 20px;
  height: 20px;
  color: hotpink;
`;

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage(
        <TitleWrapper>
          <ToolTip>
            Check your inbox for further instructions
            <Question />
            <ToolTipText width="100px" background="gray">
              In case it's not in your inbox, please check the junk mail
            </ToolTipText>
          </ToolTip>
        </TitleWrapper>
      );
    } catch (e) {
      if (e.code == "auth/user-not-found") {
        setError("This email hasn't been registered yet");
      } else if (e.code == "auth/invalid-email") {
        setError("The email provided is invalid");
      } else if (e.code == "auth/too-many-requests") {
        setError(
          "You have reset your password too frequently... Hold back for a while!"
        );
      } else {
        setError(e.message);
      }
    }

    setLoading(false);
  }

  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <PageBelowNavBar>
        <SmallCardWrapper>
          <CardWithBackground>
            <Title>Reset Password</Title>
            {error && <MessageBlock type="bad">{error}</MessageBlock>}
            {message && (
              <MessageBlock type="good" marginBottom="20px">
                {message}
              </MessageBlock>
            )}
            <Form onSubmit={handleSubmit}>
              <GroupInput
                type="email"
                ref={emailRef}
                required
                placeholder="Email"
                bottommargin="20px"
              />

              <Button
                type="submit"
                disabled={loading}
                buttonwidth="150px"
                buttonmargin="20px"
              >
                Reset Password
              </Button>
              <p>
                Already reset your password? Log in from
                <StyledLink to="/LogIn"> here </StyledLink>
              </p>
            </Form>
          </CardWithBackground>
        </SmallCardWrapper>
      </PageBelowNavBar>
    </>
  );
}

export default ForgotPassword;
