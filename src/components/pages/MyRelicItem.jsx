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
  RelicInput,
  Parchment,
  ParchmentContentWrapper,
  ParchmentTitle,
  IconWrapper,
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
        <Parchment>
          <ParchmentTitle>
            <RelicInput
              style={{ overflow: "hidden" }}
              ref={titleRef}
              defaultValue={currentTitle}
            />
          </ParchmentTitle>
          <RelicInput ref={contentRef} defaultValue={currentContent} />
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
