import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
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
} from "../../../globalStyles";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
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
          <Title>Sign Up</Title>
          {error && <MessageBlock type="bad">{error}</MessageBlock>}
          <Form onSubmit={handleSubmit}>
            <GroupInput
              type="email"
              ref={emailRef}
              required
              placeholder="Email"
            />
            <GroupInput
              type="password"
              ref={passwordRef}
              required
              placeholder="Password"
            />
            <GroupInput
              type="password"
              ref={passwordConfirmRef}
              required
              placeholder="Confirm Password"
              bottommargin="20px"
            />
            <LightButton buttonmargin="0" type="submit" disabled={loading}>
              Sign Up
            </LightButton>
          </Form>
          <Extra>
            <p>
              Already have an account? <br />
              <StyledLink to="/LogIn">Log In</StyledLink> instead
            </p>
          </Extra>
        </Card>
      </CardWrapper>
    </>
  );
}

export default SignUp;
