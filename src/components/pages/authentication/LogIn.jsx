import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import background from "../../../backgrounds/sign-up-galaxy.mp4";
import {
  Title,
  Form,
  GroupInput,
  MessageBlock,
  VideoBackground,
  StyledLink,
  Button,
  Page,
  GroupTitle,
} from "../../../styles/globalStyles";
import {
  MainPageLeft,
  SubPageRight,
} from "../../../styles/authenticationPageStyles";

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
      <Page>
        <MainPageLeft>
          <Title>Log In</Title>
          {error && <MessageBlock type="bad">{error}</MessageBlock>}
          <Form onSubmit={handleSubmit}>
            <GroupTitle>EMAIL</GroupTitle>
            <GroupInput type="email" ref={emailRef} required />
            <GroupTitle>PASSWORD</GroupTitle>
            <GroupInput
              type="password"
              ref={passwordRef}
              required
              bottommargin="20px"
            />

            <Button type="submit" disabled={loading}>
              LOG IN
            </Button>
          </Form>
          <p>
            Forget your password? Reset from
            <StyledLink to="/ForgotPassword"> here </StyledLink>
          </p>
        </MainPageLeft>
        <SubPageRight>
          <div>
            <Title>New here?</Title>
            <GroupTitle>Sign up and uncover a brand new world...</GroupTitle>
          </div>
          <Link to="/SignUp">
            <Button>SIGN UP</Button>
          </Link>
        </SubPageRight>
      </Page>
    </>
  );
}

export default LogIn;
