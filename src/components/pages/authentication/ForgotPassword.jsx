import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import background from "../../../backgrounds/sign-up-galaxy.mp4";
import {
  Card,
  Title,
  Form,
  GroupInput,
  Extra,
  LightButton,
  MessageBlock,
  VideoBackground,
  CardWrapper,
  StyledLink,
} from "../../../styles/globalStyles";

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
      setMessage("Check your inbox for further instructions.");
    } catch (e) {
      setError(e.message);
    }

    setLoading(false);
  }

  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <CardWrapper>
        <Card>
          <Title>Reset Password</Title>
          {error && <MessageBlock type="bad">{error}</MessageBlock>}
          {message && <MessageBlock type="good">{message}</MessageBlock>}
          <Form onSubmit={handleSubmit}>
            <GroupInput
              type="email"
              ref={emailRef}
              required
              placeholder="Email"
              bottommargin="20px"
            />

            <LightButton type="submit" disabled={loading}>
              Reset Password
            </LightButton>
          </Form>
          <Extra>
            <StyledLink to="/LogIn">Log In</StyledLink>
            <p>
              Need a new account? <br />
              <StyledLink to="/SignUp">Sign Up</StyledLink> here
            </p>
          </Extra>
        </Card>
      </CardWrapper>
    </>
  );
}

export default ForgotPassword;
