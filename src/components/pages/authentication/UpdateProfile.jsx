import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import { useAuth } from "../../context/AuthContext";
import {
  FormGroup,
  GroupTitle,
  GroupInput,
  MessageBlock,
  Button,
} from "../../../styles/globalStyles";
import { db } from "../../../firebase";
import { ProfileWrapper, TitleWrapper } from "./ViewProfile";
import { doc, updateDoc } from "firebase/firestore";

const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  padding: 0 20px 10px 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: radial-gradient(
      circle,
      rgba(206, 250, 107, 1) 0%,
      rgba(93, 206, 242, 1) 100%
    );
  }
`;

export default function UpdateProfile(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const nicknameRef = useRef();
  const genderRef = useRef();
  const facultyRef = useRef();
  const yearOfStudyRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const userRef = doc(db, "users", currentUser.uid);
  const { gender, faculty, yearOfStudy } = props.moreUserInfo;

  async function updateAdditionalInfo(otherInfo) {
    const { newGender, newFaculty, newYearOfStudy } = otherInfo;
    if (newGender) {
      await updateDoc(userRef, { gender: newGender });
    }
    if (newFaculty) {
      await updateDoc(userRef, { gender: newFaculty });
    }
    if (newYearOfStudy) {
      await updateDoc(userRef, { gender: newYearOfStudy });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const promises = [];
    setLoading(true);
    setError("");

    if (
      emailRef.current.value &&
      emailRef.current.value !== currentUser.email
    ) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    const otherInfo = {
      newGender: genderRef.current.value,
      newFaculty: facultyRef.current.value,
      newYearOfStudy: yearOfStudyRef.current.value,
    };

    promises.push(updateAdditionalInfo(otherInfo));

    Promise.all(promises)
      .then(() => {
        alert("Updated successfully!");
      })
      .catch((e) => {
        setError(e.message);
        console.log(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <ProfileWrapper>
      <TitleWrapper titleheight="10%">Update Profile</TitleWrapper>
      {error && <MessageBlock type="bad">{error}</MessageBlock>}
      <MainForm onSubmit={handleSubmit}>
        <FormGroup>
          <GroupTitle>Email</GroupTitle>
          <GroupInput
            type="email"
            ref={emailRef}
            placeholder={currentUser.email}
          />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Password</GroupTitle>
          <GroupInput type="password" ref={passwordRef} placeholder="******" />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Username</GroupTitle>
          <GroupInput ref={usernameRef} placeholder={currentUser.displayName} />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Gender</GroupTitle>
          <GroupInput ref={genderRef} placeholder={gender} />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Faculty</GroupTitle>
          <GroupInput ref={facultyRef} placeholder={faculty} />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Year of Study</GroupTitle>
          <GroupInput ref={yearOfStudyRef} placeholder={yearOfStudy} />
        </FormGroup>
        <Button
          buttoncolor="dodgerblue"
          buttonmargin="40px"
          buttonwidth="50%"
          type="submit"
          disabled={loading}
        >
          Update
        </Button>
      </MainForm>
    </ProfileWrapper>
  );
}
