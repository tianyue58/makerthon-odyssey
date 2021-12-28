import { getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { IconButton, RoundButton, Wrapper } from "../../styles/globalStyles";
import { db } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import parchment from "../../images/parchment.png";

const RelicContainer = styled(Wrapper)`
  word-break: break-word;
  font-family: Perpetua;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${parchment});
  margin: 10px;
  overflow: hidden;
  padding-bottom: 15%;
  opacity: 0.7;
`;

const RelicTitle = styled.h2`
  font-family: Lucida Bright;
  text-transform: uppercase;
  text-align: center;
  word-break: break-word;
  padding-top: 15%;
`;

export const RelicContentWrapper = styled(Wrapper)`
  word-break: break-word;
  width: 60%;
  height: 90%;
  font-size: 120%;
  font-family: Perpetua;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: lightyellow;
  }
`;

function RelicItem(props) {
  const relicRef = doc(db, "relics", props.relicObject.id);
  const [relic, setRelic] = useState();

  async function loadRelic() {
    const relicSnap = await getDoc(relicRef);
    if (relicSnap.exists) setRelic(relicSnap.data());
  }

  useEffect(() => loadRelic(), []);

  return (
    <RelicContainer>
      {relic ? (
        <>
          <RelicTitle>{relic.title}</RelicTitle>
          <RelicContentWrapper>{relic.content}</RelicContentWrapper>
        </>
      ) : null}
    </RelicContainer>
  );
}

export default RelicItem;
