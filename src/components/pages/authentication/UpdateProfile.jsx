import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import { useAuth } from "../../context/AuthContext";
import { Button, QuestionIcon } from "../../../styles/globalStyles";
import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import {
  ProfileWrapper,
  FormGroup,
  MainForm,
  Item,
} from "../../../styles/profilePageStyles";
import {
  GroupInput,
  MessageBlock,
  Title,
} from "../../../styles/authenticationPageStyles";
import {
  ToolTip,
  ToolTipText,
  TitleWrapper,
} from "../../../styles/globalStyles";

const UpdateProfileWrapper = styled(ProfileWrapper)`
  align-items: center;
`;

const LongGroupInput = styled(GroupInput)`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 40px;
  margin-bottom: 0;
  border: 1px solid transparent;
  border-radius: 0.8rem;
`;

const FieldItem = styled(Item)`
  width: 120px;
  text-align: center;
`;

const MessageBox = styled(MessageBlock)`
  margin-bottom: 30px;
  height: 50px;
`;

const Question = styled(QuestionIcon)`
  top: 40px;
  right: -20px;
  width: 20px;
  height: 20px;
  color: hotpink;
`;

export default function UpdateProfile(props) {
  const passwordRef = useRef();
  const nicknameRef = useRef();
  const facultyRef = useRef();
  const yearOfStudyRef = useRef();
  const residenceRef = useRef();

  const { currentUser, updateUserPassword } = useAuth();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const userRef = doc(db, "users", currentUser.uid);
  const { nickname, faculty, yearOfStudy, residence } = props.moreUserInfo;

  async function updateAdditionalInfo(otherInfo) {
    const { newNickname, newFaculty, newYearOfStudy, newResidence } = otherInfo;
    if (newNickname) {
      await updateDoc(userRef, { nickname: newNickname });
    }
    if (newFaculty) {
      await updateDoc(userRef, { faculty: newFaculty });
    }
    if (newYearOfStudy) {
      await updateDoc(userRef, { yearOfStudy: newYearOfStudy });
    }
    if (newResidence) {
      await updateDoc(userRef, { residence: newResidence });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const promises = [];
    setLoading(true);
    setMessage("");
    setError("");

    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }

    const otherInfo = {
      newNickname: nicknameRef.current.value,
      newFaculty: facultyRef.current.value,
      newYearOfStudy: yearOfStudyRef.current.value,
      newResidence: residenceRef.current.value,
    };

    promises.push(updateAdditionalInfo(otherInfo));

    Promise.all(promises)
      .then(() => {
        setMessage("Updated successfully :D");
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
    <UpdateProfileWrapper>
      <TitleWrapper>
        <ToolTip>
          <Title>Update Profile</Title>
          <Question />
          <ToolTipText>
            For the field that you don't wanna edit, simply leave it blank
          </ToolTipText>
        </ToolTip>
      </TitleWrapper>
      {error && <MessageBox type="bad">{error}</MessageBox>}
      {message && <MessageBox type="good">{message}</MessageBox>}
      <MainForm onSubmit={handleSubmit}>
        <FormGroup>
          <FieldItem>Password</FieldItem>
          <LongGroupInput
            type="password"
            ref={passwordRef}
            placeholder="******"
          />
        </FormGroup>
        <FormGroup>
          <FieldItem>Nickname</FieldItem>
          <LongGroupInput ref={nicknameRef} placeholder={nickname} />
        </FormGroup>
        <FormGroup>
          <FieldItem>Faculty</FieldItem>
          <LongGroupInput ref={facultyRef} placeholder={faculty} />
        </FormGroup>
        <FormGroup>
          <FieldItem>Year of Study</FieldItem>
          <LongGroupInput ref={yearOfStudyRef} placeholder={yearOfStudy} />
        </FormGroup>
        <FormGroup>
          <FieldItem>Residence</FieldItem>
          <LongGroupInput ref={residenceRef} placeholder={residence} />
        </FormGroup>

        {/* <Title>More Information</Title>
        <LongGroupInput type="text" ref={nicknameRef} placeholder="Nickname" />
        <OptionsGroup>
          <input
            type="radio"
            name="gender"
            id="male"
            onChange={() => setGender("Male")}
          />
          Male
          <input
            type="radio"
            name="gender"
            id="female"
            onChange={() => setGender("Female")}
          />
          Female
          <input
            type="radio"
            name="gender"
            id="other"
            onChange={() => setGender("Other")}
          />
          Other
        </OptionsGroup>
        <OptionsGroup>
          <label for="yearOfStudy">Choose your year of study</label>
          <select name="yearOfStudy" id="yearOfStudy">
            <option
              value="UY1"
              onChange={() => setYearOfStudy("Undergraduate Year 1")}
            >
              Undergraduate Year 1
            </option>
            <option
              value="UY2"
              onChange={() => setYearOfStudy("Undergraduate Year 2")}
            >
              Undergraduate Year 2
            </option>
            <option
              value="UY3"
              onChange={() => setYearOfStudy("Undergraduate Year 2")}
            >
              Undergraduate Year 3
            </option>
            <option
              value="UY4"
              onChange={() => setYearOfStudy("Undergraduate Year 2")}
            >
              Undergraduate Year 4
            </option>
          </select>
        </OptionsGroup> */}

        <Button buttoncolor="dodgerblue" type="submit" disabled={loading}>
          Update
        </Button>
      </MainForm>
    </UpdateProfileWrapper>
  );
}
