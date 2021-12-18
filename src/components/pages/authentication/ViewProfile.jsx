import React from "react";
import styled from "styled-components/macro";
import { useAuth } from "../../context/AuthContext";
import {
  ProfileWrapper,
  InfoRow,
  Item,
  ProfileInfo,
} from "../../../styles/profilePageStyles";
import { Title } from "../../../styles/authenticationPageStyles";

export default function ViewProfile(props) {
  const { currentUser } = useAuth();
  const { nickname, faculty, yearOfStudy, residence } = props.moreUserInfo;

  return (
    <ProfileWrapper>
      <Title>My Profile</Title>
      <ProfileInfo>
        <InfoRow dark="true">
          <Item>Nickname:</Item> {nickname}
        </InfoRow>
        <InfoRow>
          <Item>Email:</Item> {currentUser.email}
        </InfoRow>
        <InfoRow dark="true">
          <Item>Faculty: </Item> {faculty}
        </InfoRow>
        <InfoRow>
          <Item>Year of Study: </Item> {yearOfStudy}
        </InfoRow>
        <InfoRow dark="true">
          <Item>Residence: </Item> {residence}
        </InfoRow>
      </ProfileInfo>
    </ProfileWrapper>
  );
}
