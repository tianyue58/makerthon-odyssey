import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useAuth } from "../../context/AuthContext";
import profile from "../../../images/unicorn.svg";
import loadingIcon from "../../../gifs/loading-colorful.gif";
import waitingForChoiceIcon from "../../../images/waiting.svg";
import { db, storage } from "../../../firebase";
import ViewProfile from "./UpdateProfile";
import UpdateProfile from "./ViewProfile";
import DefaultProfilePhoto from "../../../images/unicorn.svg";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import background from "../../../backgrounds/profile-page-galaxy.mp4";
import {
  MainPageRight,
  SubPageLeft,
  Input,
} from "../../../styles/authenticationPageStyles";
import {
  VideoBackground,
  Button,
  PageBelowNavBar,
  Wrapper,
} from "../../../styles/globalStyles";
import { ProfilePhoto } from "../../../styles/profilePageStyles";
import {
  AnimatedMainPageRight,
  AnimatedSubPageLeft,
  containerVariants,
} from "../../../styles/animatedStyles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import "../../../styles/animations.css";

export default function UserProfile() {
  const [image, setImage] = useState();
  const [imageChosen, setImageChosen] = useState(false);
  const { currentUser } = useAuth();
  const [waitingForImageUpload, setWaitingForImageUpload] = useState(false);
  const [uploadClicked, setUploadClicked] = useState(false);
  const imageRef = useRef();
  const [imageURL, setImageURL] = useState();
  const [isViewingProfile, setIsViewingProfile] = useState(true);
  const [uploadImageURL, setUploadImageURL] = useState();
  const [nickname, setNickname] = useState();
  const [faculty, setFaculty] = useState();
  const [yearOfStudy, setYearOfStudy] = useState();
  const [residence, setResidence] = useState();
  const userRef = doc(db, "users", currentUser.uid);
  const moreUserInfo = {
    nickname: nickname,
    faculty: faculty,
    yearOfStudy: yearOfStudy,
    residence: residence,
  };

  async function getUser() {
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      setUploadImageURL(data.uploadImageURL ? data.uploadImageURL : profile);
      setNickname(data.nickname);
      setFaculty(data.faculty);
      setYearOfStudy(data.yearOfStudy);
      setResidence(data.residence);
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
      setUploadClicked(true);
      const storageRef = ref(storage, `${imageURL.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageURL);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            updateDoc(userRef, { uploadImageURL: url }).then(() => {
              setUploadImageURL(image);
              setWaitingForImageUpload(false);
              setImageChosen(false);
              setUploadClicked(false);
            });
          });
        }
      );
    }
  };

  const displayedPhoto = () => {
    if (waitingForImageUpload) {
      if (!imageChosen) {
        return waitingForChoiceIcon;
      } else {
        if (uploadClicked) {
          return loadingIcon;
        } else return image;
      }
    } else return uploadImageURL ? uploadImageURL : DefaultProfilePhoto;
  };

  const ChangeProfilePhotoButton = () => {
    return (
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        buttonwidth="180px"
        onClick={handleUploadImage}
        disabled={waitingForImageUpload && !imageChosen}
      >
        {waitingForImageUpload ? "Upload" : "Change"} Profile Photo
      </Button>
    );
  };

  const UpdateProfileButton = () => {
    return (
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsViewingProfile(!isViewingProfile)}
        buttonwidth="130px"
        buttonmargin="20px"
      >
        {isViewingProfile ? "Update" : "View"} Profile
      </Button>
    );
  };

  return (
    <motion.div
      className="page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <VideoBackground autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
      </VideoBackground>
      <PageBelowNavBar>
        {AnimatedSubPageLeft(
          <Wrapper>
            <ProfilePhoto src={displayedPhoto()} alt="photo" />
            {waitingForImageUpload ? (
              <Input
                type="file"
                name="photo"
                ref={imageRef}
                onChange={handleImageChange}
                noBorder="true"
              />
            ) : null}
            {ChangeProfilePhotoButton()}
          </Wrapper>
        )}
        {AnimatedMainPageRight(
          <>
            <Wrapper width="60%" height="70%">
              {isViewingProfile ? (
                <UpdateProfile moreUserInfo={moreUserInfo} />
              ) : (
                <ViewProfile moreUserInfo={moreUserInfo} />
              )}
            </Wrapper>
            {UpdateProfileButton()}
          </>
        )}
      </PageBelowNavBar>
    </motion.div>
  );
}
