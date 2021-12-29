import React from "react";
import "../../styles/animations.css";

function TalkingTipIcon(props) {
  const handleClick = () => {
    props.onClick(props.index);
  };

  return (
    <button
      className="solutionIcon"
      style={{
        backgroundImage: `url('${props.icon}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      onClick={handleClick}
    />
  );
}

export default TalkingTipIcon;
