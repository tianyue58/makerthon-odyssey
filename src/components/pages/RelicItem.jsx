import { getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  Parchment,
  ParchmentContentWrapper,
  ParchmentTitle,
} from "../../styles/relicPageStyles";

function RelicItem(props) {
  const relicRef = doc(db, "relics", props.relicObject.id);
  const [relic, setRelic] = useState();

  async function loadRelic() {
    const relicSnap = await getDoc(relicRef);
    if (relicSnap.exists) setRelic(relicSnap.data());
  }

  useEffect(() => loadRelic(), []);

  return (
    <Parchment>
      {relic ? (
        <>
          <ParchmentTitle>{relic.title}</ParchmentTitle>
          <ParchmentContentWrapper>{relic.content}</ParchmentContentWrapper>
        </>
      ) : null}
    </Parchment>
  );
}

export default RelicItem;
