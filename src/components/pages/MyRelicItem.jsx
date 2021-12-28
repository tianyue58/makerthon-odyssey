import { getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";
import { IconButton, RoundButton, Button } from "../../styles/globalStyles";
import { db } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import { GroupInput, Title } from "../../styles/authenticationPageStyles";
import { LinkContainer } from "../../styles/featurePageStyles";
import {
  RelicInput,
  RelicContainer,
  RelicTitle,
  RelicContentWrapper,
} from "../../styles/relicPageStyles";

function MyRelicItem(props) {
  const id = props.relicObject.id;
  const relicRef = doc(db, "relics", id);
  const [relic, setRelic] = useState();
  const [isApproved, setIsApproved] = useState();
  const [isEdit, setIsEdit] = useState();
  const [currentTitle, setCurrentTitle] = useState();
  const [currentContent, setCurrentContent] = useState();
  const titleRef = useRef();
  const contentRef = useRef();
  const [loading, setLoading] = useState(false);

  async function loadRelic() {
    const relicSnap = await getDoc(relicRef);
    if (relicSnap.exists) setRelic(relicSnap.data());
    const data = relicSnap.data();
    setCurrentTitle(data.title);
    setCurrentContent(data.content);
    setIsApproved(data.approved);
  }

  useEffect(() => loadRelic(), []);

  const handleRemove = () => props.onRemove(id);

  async function handleUpdate(info) {
    const { newTitle, newContent } = info;
    if (newTitle) {
      await updateDoc(relicRef, { title: newTitle });
      setCurrentTitle(newTitle);
    }
    if (newContent) {
      await updateDoc(relicRef, { content: newContent });
      setCurrentContent(newContent);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const promises = [];
    setLoading(true);

    const info = {
      newTitle: titleRef.current.value,
      newContent: contentRef.current.value,
    };

    promises.push(handleUpdate(info));

    Promise.all(promises).then(() => {
      setLoading(false);
      setIsEdit(false);
    });
  }

  return (
    <>
      {isEdit ? (
        <RelicContainer>
          <RelicTitle>
            <RelicInput ref={titleRef} defaultValue={currentTitle} />
          </RelicTitle>
          <RelicContentWrapper>
            <RelicInput ref={contentRef} defaultValue={currentContent} />
          </RelicContentWrapper>
          <Button disabled={loading} onClick={handleSubmit}>
            Confirm
          </Button>
        </RelicContainer>
      ) : (
        <RelicContainer isApproved={isApproved}>
          {relic ? (
            <>
              <RelicTitle>{currentTitle}</RelicTitle>
              <RelicContentWrapper>{currentContent}</RelicContentWrapper>
              <LinkContainer>
                <Button type="button" onClick={() => setIsEdit(true)}>
                  Edit
                </Button>
                <Button type="button" onClick={handleRemove}>
                  Remove
                </Button>
              </LinkContainer>
            </>
          ) : null}
        </RelicContainer>
      )}
    </>
  );
}

export default MyRelicItem;
