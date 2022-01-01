import React, { useEffect } from "react";
import background from "../../backgrounds/view-resources-background.mp4";
import {
  PageBelowNavBar,
  VideoBackground,
  Wrapper,
  DownloadIcon,
} from "../../styles/globalStyles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { containerVariants } from "../../styles/animatedStyles";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import styled from "styled-components/macro";
import "../../styles/animations.css";

const PageWrapper = styled(Wrapper)`
  left: 40%;
  width: 60%;
`;

const BookCover = styled.img`
  width: 100%;
  height: 100%;
`;

const DownloadLink = styled.a`
  text-decoration: none;
  &:visited {
    color: white;
  }
  &:hover {
    color: purple;
  }
`;

function ViewResources() {
  const bookletPDF = ref(
    storage,
    "gs://odyssey-ffb23.appspot.com/resources/campaign booklet.pdf"
  );

  const bookletCover = ref(
    storage,
    "gs://odyssey-ffb23.appspot.com/resources/booklet-cover.png"
  );

  useEffect(() => getBooklet(), []);

  const getBooklet = () => {
    getDownloadURL(bookletCover)
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
        const cover = document.getElementById("bookletCover");
        cover.setAttribute("src", url);
      })
      .catch((e) => {
        console.log(e.message);
      });
    getDownloadURL(bookletPDF)
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };

        xhr.open("GET", url);
        xhr.send();
        const downloadLink = document.getElementById("bookletPdf");
        downloadLink.setAttribute("href", url);
      })
      .catch((e) => {
        console.log(e.message);
      });
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
        <PageWrapper>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <BookCover id="bookletCover" />
              </div>
              <div class="flip-card-back">
                <DownloadLink id="bookletPdf" download target="_blank">
                  <DownloadIcon />
                </DownloadLink>
              </div>
            </div>
          </div>
        </PageWrapper>
      </PageBelowNavBar>
    </motion.div>
  );
}

export default ViewResources;
