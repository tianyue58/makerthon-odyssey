import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../backgrounds/view-galaxy.mp4";
import { VideoBackground, WholePage, Wrapper } from "../../styles/globalStyles";
import { motion } from "framer-motion/dist/framer-motion";
import { containerVariants } from "../../styles/animatedStyles";
import "../../styles/animations.css";
import tip1 from "../../images/tips/tip1.png";
import tip2 from "../../images/tips/tip2.png";
import tip3 from "../../images/tips/tip3.png";
import tip4 from "../../images/tips/tip4.png";
import tip5 from "../../images/tips/tip5.png";
import tip6 from "../../images/tips/tip6.png";
import tip7 from "../../images/tips/tip7.png";
import tip8 from "../../images/tips/tip8.png";
import tip9 from "../../images/tips/tip9.png";

import "../../styles/animations.css";
import { GridContainer, GridItem2 } from "../../styles/featurePageStyles";

function Tips() {
  const navigate = useNavigate();

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
      <WholePage>
        <Wrapper>
          <GridContainer>
            <GridItem2>
              <img
                className="planet"
                src={tip1}
                alt="img"
                onClick={() => navigate("/TipsState", { state: "tip1" })}
              />
            </GridItem2>
            <GridItem2>
              <img
                className="planet"
                src={tip2}
                alt="img"
                onClick={() => navigate("/TipsState", { state: "tip2" })}
              />
            </GridItem2>
            <GridItem2>
              <img
                className="planet"
                src={tip3}
                alt="img"
                onClick={() => navigate("/TipsState", { state: "tip3" })}
              />
            </GridItem2>
            <GridItem2>
              <img
                className="planet"
                src={tip4}
                alt="img"
                onClick={() => navigate("/TipsState", { state: "tip4" })}
              />
            </GridItem2>
            <GridItem2>
              <img
                className="planet"
                src={tip5}
                alt="img"
                onClick={() => navigate("/TipsState", { state: "tip5" })}
              />
            </GridItem2>
            <GridItem2>
              <img
                className="planet"
                src={tip6}
                alt="img"
                onClick={() => navigate("/TipsState", { state: "tip6" })}
              />
            </GridItem2>
            <GridItem2>
              <img
                className="planet"
                src={tip7}
                alt="img"
                onClick={() => navigate("/TipsState", { state: "tip7" })}
              />
            </GridItem2>
            <GridItem2>
              <img
                className="planet"
                src={tip8}
                alt="img"
                onClick={() => navigate("/TipsState", { state: "tip8" })}
              />
            </GridItem2>
            <GridItem2>
              <img
                className="planet"
                src={tip9}
                alt="img"
                onClick={() => navigate("/TipsState", { state: "tip9" })}
              />
            </GridItem2>
          </GridContainer>
        </Wrapper>
      </WholePage>
    </motion.div>
  );
}

export default Tips;
