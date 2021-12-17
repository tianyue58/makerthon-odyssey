import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";
import {
  VideoBackground,
  ProfilePageWrapper,
  Button,
  Input,
  Container,
} from "../../../styles/globalStyles";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import profile from "../../../images/unicorn.svg";
import loadingImage from "../../../images/unicorn.svg";
import { db, storage } from "../../../firebase";
import ViewProfile from "./UpdateProfile";
import UpdateProfile from "./ViewProfile";
import { doc, getDoc } from "firebase/firestore";
import background from "../../../backgrounds/profile-page-galaxy.mp4";

const LeftPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-end;
`;

export const RightPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding-left: 25px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 75%;
`;

const ProfilePhoto = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export default function UserProfile() {
  const [image, setImage] = useState();
  const [imageChosen, setImageChosen] = useState(false);
  const { currentUser } = useAuth();
  const [waitingForImageUpload, setWaitingForImageUpload] = useState(false);
  const imageRef = useRef();
  const [imageURL, setImageURL] = useState();
  const [isViewingProfile, setIsViewingProfile] = useState(true);
  const [uploadImageURL, setUploadImageURL] = useState();
  const [gender, setGender] = useState();
  const [faculty, setFaculty] = useState();
  const [yearOfStudy, setYearOfStudy] = useState();
  const userRef = doc(db, "users", currentUser.uid);
  const moreUserInfo = {
    gender: gender,
    faculty: faculty,
    yearOfStudy: yearOfStudy,
  };

  async function getUser() {
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      setUploadImageURL(data.uploadImageURL ? data.uploadImageURL : profile);
      setGender(data.gender ? data.gender : "");
      setFaculty(data.faulty ? data.faulty : "");
      setYearOfStudy(data.yearOfStudy ? data.yearOfStudy : "");
    }
  }

  useEffect(() => getUser(), [moreUserInfo]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageURL(e.target.files[0]);
      setImageChosen(true);
    }
  };

  const handleUploadImage = () => {
    if (!waitingForImageUpload) {
      setWaitingForImageUpload(true);
    } else {
      const uploadTask = storage.ref(`${imageURL.name}`).put(imageURL);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(imageURL.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("UserProfile")
                .doc(currentUser.uid)
                .update({ uploadImageURL: url })
                .then(() => {
                  setUploadImageURL(image);
                  alert("Updated successfully!");
                  setWaitingForImageUpload(false);
                  setImageChosen(false);
                });
            });
        }
      );
    }
  };

  return (
    <>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <ProfilePageWrapper>
        <LeftPage>
          <Wrapper>
            <ProfilePhoto
              src={
                waitingForImageUpload
                  ? imageChosen
                    ? image
                    : loadingImage
                  : uploadImageURL
              }
              alt="photo"
            />
            {waitingForImageUpload ? (
              <Input
                type="file"
                name="photo"
                ref={imageRef}
                onChange={handleImageChange}
                noBorder="true"
              />
            ) : null}
            <Button
              buttonwidth="180px"
              onClick={handleUploadImage}
              disabled={waitingForImageUpload && !imageChosen}
            >
              {waitingForImageUpload ? "Upload" : "Change"} Profile Photo
            </Button>
          </Wrapper>
        </LeftPage>
        <RightPage>
          <Wrapper>
            {isViewingProfile ? (
              <ViewProfile moreUserInfo={moreUserInfo} />
            ) : (
              <UpdateProfile moreUserInfo={moreUserInfo} />
            )}
            <Button
              onClick={() => setIsViewingProfile(!isViewingProfile)}
              buttonwidth="130px"
              buttonmargin="20px"
            >
              {isViewingProfile ? "View" : "Update"} Profile
            </Button>
          </Wrapper>
        </RightPage>
      </ProfilePageWrapper>
    </>
  );
}
