import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import background from "../../../backgrounds/sign-up-galaxy.mp4";
import {
  Button,
  PageBelowNavBar,
  VideoBackground,
} from "../../../styles/globalStyles";
import {
  MainPageRight,
  SubPageLeft,
  Card,
  Title,
  MessageBlock,
  Form,
  GroupInput,
  GroupTitle,
} from "../../../styles/authenticationPageStyles";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nicknameRef = useRef();

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
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        nicknameRef.current.value
      );
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
      <PageBelowNavBar>
        <SubPageLeft>
          <div>
            <Title>One of us?</Title>
            <GroupTitle>
              If you already have an account, just sign in. <br />
              We've missed you!
            </GroupTitle>
          </div>
          <Link to="/LogIn">
            <Button>LOG IN</Button>
          </Link>
        </SubPageLeft>
        <MainPageRight>
          <Card>
            <Title>
              One small step for you, <br />
              One giant leap for your mentality...
            </Title>
            {error && <MessageBlock type="bad">{error}</MessageBlock>}
            <Form onSubmit={handleSubmit}>
              <GroupTitle>EMAIL</GroupTitle>
              <GroupInput
                type="email"
                ref={emailRef}
                required
                placeholder="This is how we're gonna reach out for you"
              />
              <GroupTitle>PASSWORD</GroupTitle>
              <GroupInput
                type="password"
                ref={passwordRef}
                required
                placeholder="Set a secure password for your account"
              />
              <GroupTitle>COMFIRM PASSWORD</GroupTitle>
              <GroupInput
                type="password"
                ref={passwordConfirmRef}
                required
                placeholder="Re-enter the password you've just set"
                bottommargin="50px"
              />
              <Button buttonmargin="0" type="submit" disabled={loading}>
                SIGN UP
              </Button>
            </Form>
          </Card>
        </MainPageRight>
      </PageBelowNavBar>
    </>
  );
}

export default SignUp;
