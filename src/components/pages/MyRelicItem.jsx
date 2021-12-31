import { getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";
import {
  Button,
  ApprovedIcon,
  EditIcon,
  DeleteIcon,
  ConfirmIcon,
} from "../../styles/globalStyles";
import { db } from "../../firebase";
import {
  RelicContentInput,
  RelicTitleInput,
  Parchment,
  ParchmentContentWrapper,
  ParchmentTitle,
  IconWrapper,
} from "../../styles/relicPageStyles";
import { BsArrowReturnLeft } from "react-icons/bs";

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
  const [isExceedingLimit, setIsExceedingLimit] = useState(false);

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

  async function handleUpdate(newTitle, newContent) {
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

    const currentTitle = titleRef.current.value;
    const currentContent = contentRef.current.value;

    if (currentTitle.length > 60) {
      alert("Please limit your title within 60 characters!");
      return;
    }

    const promises = [];
    setLoading(true);

    promises.push(handleUpdate(currentTitle, currentContent));

    Promise.all(promises).then(() => {
      setLoading(false);
      setIsEdit(false);
    });
  }

  const handleWordCount = (e) => {
    if (e.target.value.length == 60) setIsExceedingLimit(true);
    else setIsExceedingLimit(false);
  };

  return (
    <>
      {isEdit ? (
        <Parchment>
          <ParchmentTitle>
            <RelicTitleInput
              ref={titleRef}
              defaultValue={currentTitle}
              maxLength={60}
              warning={isExceedingLimit}
              onChange={(e) => handleWordCount(e)}
            />
          </ParchmentTitle>
          <RelicContentInput ref={contentRef} defaultValue={currentContent} />
          <ConfirmIcon disabled={loading} onClick={handleSubmit} />
        </Parchment>
      ) : (
        <Parchment>
          {relic ? (
            <>
              {isApproved ? <ApprovedIcon /> : null}
              <ParchmentTitle>{currentTitle}</ParchmentTitle>
              <ParchmentContentWrapper>
                {currentContent}
              </ParchmentContentWrapper>
              {!isApproved ? (
                <IconWrapper>
                  <EditIcon onClick={() => setIsEdit(true)} />
                  <DeleteIcon onClick={handleRemove} />
                </IconWrapper>
              ) : null}
            </>
          ) : null}
        </Parchment>
      )}
    </>
  );
}

export default MyRelicItem;
