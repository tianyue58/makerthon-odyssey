import { getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { IconButton, RoundButton, Wrapper } from "../../styles/globalStyles";
import { db } from "../../firebase";
import { useAuth } from "../context/AuthContext";

const SolutionContainer = styled.div`
  margin: 10px 0 10px 0;
  padding: 10px 0 10px 20px;
  border: 1px solid transparent;
  border-radius: 1rem;
  background: white;
  opacity: 0.7;
  transition: 0.5s;
  &:hover {
    color: green;
    opacity: 0.9;
  }
  display: grid;
  width: 95%;
  grid-template-columns: 10% 20% 65% 5%;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.img`
  position: relative;
  width: 80%;
  height: 80%;
  background-size: contain;
`;

function SolutionItem(props) {
  const [solution, setSolution] = useState();
  const [solutionRef, setSolutionRef] = useState();

  async function loadSolution() {
    const s = props.solutionObject;
    const solutionRef = doc(db, s.collection, s.document);
    setSolutionRef(solutionRef);
    const solutionSnap = await getDoc(solutionRef);
    if (solutionSnap.exists) setSolution(solutionSnap.data());
  }

  useEffect(() => loadSolution(), []);

  const handleRemove = () => props.onRemove(solutionRef, props.solutionObject);

  return (
    <SolutionContainer>
      {solution ? (
        <>
          <IconContainer src={solution.icon} alt="icon" />
          <h2>{solution.name}</h2>
          <Wrapper>{solution.content}</Wrapper>
          <RoundButton type="button" onClick={handleRemove}>
            -
          </RoundButton>
        </>
      ) : null}
    </SolutionContainer>
  );
}

export default SolutionItem;
