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

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (e) {
      if (e.code == "auth/user-not-found") {
        setError("This email hasn't been registered yet.");
      } else if (e.code == "auth/wrong-password") {
        setError("The password provided is incorrect.");
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
          <Title>Log In</Title>
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
              bottommargin="20px"
            />

            <LightButton type="submit" disabled={loading}>
              Log In
            </LightButton>
          </Form>
          <Extra>
            <StyledLink to="/ForgotPassword">Forgot Password?</StyledLink>
            <p>
              Doesn't have an account yet? <br />
              <StyledLink to="/SignUp">Sign Up</StyledLink> instead
            </p>
          </Extra>
        </Card>
      </CardWrapper>
    </>
  );
}

export default LogIn;
