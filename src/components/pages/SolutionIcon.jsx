import React from "react";
import styled from "styled-components/macro";

function SolutionIcon(props) {
  const { name, content, icon, link } = props.solutionObject;

  const Solution = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 150px;
    height: 150px;
    border: none;
    outline: none;
    background: none;
  `;

  return (
    <Solution
      style={{
        backgroundImage: `url('${icon}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
      onClick={() => link && window.open(link)}
    >
      {name}
    </Solution>
  );
}

export default SolutionIcon;
