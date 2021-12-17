import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
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

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login");
    } catch (e) {
      if (e.code == "auth/email-already-in-use") {
        setError("This email has already been registered.");
      } else if (e.code == "auth/weak-password") {
        setError("Password must contain at least 6 characters.");
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
