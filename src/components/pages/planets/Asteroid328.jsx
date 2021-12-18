import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../../images/328.png";
import "../../../styles/Asteroid.css";

function Asteroid328() {
  return (
    <>
      <div class="container">
        <img
          src={image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div class="figcaption">
          Welcome to Asteroid 328! 98 earthlings have visited this planet today.{" "}
          <br />
          <br />
          Click on the buttons below to find out tips related to your issue.
          Click on the "Let's Talk" sticker to see how to seek help from others.
        </div>

        <Link to="/A3281">
          <button class="btn1">Button1</button>
        </Link>
        <Link to="/A3282">
          <button class="btn2">Button2</button>
        </Link>
        <Link to="/A3283">
          <button class="btn3">Button3</button>
        </Link>

        <Link to="/A3284">
          <button class="btn7">Talking Tips</button>
        </Link>
      </div>
    </>
  );
}

export default Asteroid328;
