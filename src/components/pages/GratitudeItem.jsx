// import { getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
// import React, { useEffect, useState, useRef } from "react";
// import styled from "styled-components/macro";
// import { IconButton, RoundButton, Button } from "../../styles/globalStyles";
// import { db } from "../../firebase";
// import { useAuth } from "../context/AuthContext";
// import { GroupInput, Title } from "../../styles/authenticationPageStyles";
// import { LinkContainer } from "../../styles/featurePageStyles";
// import {
//   GratitudeInput,
//   GratitudeContainer,
//   GratitudeTitle,
//   GratitudeContentWrapper,
// } from "../../styles/relicPageStyles";

// function GratitudeItem(props) {
//   const id = props.gratitudeObject.id;
//   const gratitudeRef = doc(db, "gratitudes", id);
//   const [gratitude, setGratitude] = useState();
//   const [isEdit, setIsEdit] = useState();
//   const [currentTitle, setCurrentTitle] = useState();
//   const [currentContent, setCurrentContent] = useState();
//   const [currentColor, setCurrentColor] = useState();
//   const [currentTime, setCurrentTime] = useState();
//   const titleRef = useRef();
//   const contentRef = useRef();
//   const [loading, setLoading] = useState(false);

//   const colors = [
//     "MistyRose",
//     "MintCream",
//     "LightYellow",
//     "LightGreen",
//     "LightBlue",
//     "LightGray",
//     "Thistle",
//     "SeaShell",
//   ];

//   async function loadGratitude() {
//     const gratitudeSnap = await getDoc(gratitudeRef);
//     if (gratitudeSnap.exists) setGratitude(gratitudeSnap.data());
//     const data = gratitudeSnap.data();
//     setCurrentTitle(data.title);
//     setCurrentContent(data.content);
//     setCurrentTime(data.time);
//   }

//   useEffect(() => loadGratitude(), []);

//   const handleRemove = () => props.onRemove(id);

//   async function handleUpdate(info) {
//     const { newTitle, newContent } = info;
//     if (newTitle) {
//       await updateDoc(gratitudeRef, { title: newTitle });
//       setCurrentTitle(newTitle);
//     }
//     if (newContent) {
//       await updateDoc(gratitudeRef, { content: newContent });
//       setCurrentContent(newContent);
//     }
//     if (newTitle || newContent) {
//       const now = new Date();
//       const newTime = now.toLocaleDateString() + " " + now.toLocaleTimeString();
//       await updateDoc(gratitudeRef, { time: newTime });
//       setCurrentTime(newTime);
//     }
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     const promises = [];
//     setLoading(true);

//     const info = {
//       newTitle: titleRef.current.value,
//       newContent: contentRef.current.value,
//     };

//     promises.push(handleUpdate(info));

//     Promise.all(promises).then(() => {
//       setLoading(false);
//       setIsEdit(false);
//     });
//   }

//   return (
//     <>
//       {isEdit ? (
//         <GratitudeContainer>
//           <GratitudeTitle>
//             <GratitudeInput ref={titleRef} defaultValue={currentTitle} />
//           </GratitudeTitle>
//           <GratitudeContentWrapper>
//             <GratitudeInput ref={contentRef} defaultValue={currentContent} />
//           </GratitudeContentWrapper>
//           <Button disabled={loading} onClick={handleSubmit}>
//             Confirm
//           </Button>
//         </GratitudeContainer>
//       ) : (
//         <GratitudeContainer>
//           {gratitude ? (
//             <>
//               <GratitudeTitle>{currentTitle}</GratitudeTitle>
//               <GratitudeContentWrapper>
//                 {currentContent}
//               </GratitudeContentWrapper>
//               <div>{currentTime}</div>
//               <LinkContainer>
//                 <Button type="button" onClick={() => setIsEdit(true)}>
//                   Edit
//                 </Button>
//                 <Button type="button" onClick={handleRemove}>
//                   Remove
//                 </Button>
//               </LinkContainer>
//             </>
//           ) : null}
//         </GratitudeContainer>
//       )}
//     </>
//   );
// }

// export default GratitudeItem;
