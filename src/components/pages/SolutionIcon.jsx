import React from "react";
import styled from "styled-components/macro";
import "../../styles/animations.css";

function SolutionIcon(props) {
  const { icon, link } = props.solutionObject;

  const handleClick = () => {
    link && window.open(link);
    props.onClick(props.index);
  };

  return (
    <button
      className="solutionIcon"
      style={{
        backgroundImage: `url('${icon}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      onClick={handleClick}
    />
  );
}

export default SolutionIcon;
