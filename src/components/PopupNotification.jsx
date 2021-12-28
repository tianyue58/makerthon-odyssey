import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/popupNotification.css";

function PopupNotification(props) {
  const isSuccess = props.status;
  const navigate = useNavigate();
  const backPlanet = props.planet.split(" ").join("");

  return (
    <div id="container">
      {isSuccess ? (
        <div id="success-box">
          <div class="dot"></div>
          <div class="dot two"></div>
          <div class="face">
            <div class="eye"></div>
            <div class="eye right"></div>
            <div class="mouth happy"></div>
          </div>
          <div class="shadow scale"></div>
          <div class="message">
            <h1 class="alert heading">Thank you!</h1>
            <p class="content">
              Your solution is under review.
              <br />
              We will notify you once we publish it to the community.
            </p>
          </div>
          <button
            class="button-box"
            onClick={() => navigate("/EmotionPlanet", { state: backPlanet })}
          >
            <h1 class="heading" style={{ color: "darkgreen" }}>
              Back to Planet
            </h1>
          </button>
        </div>
      ) : (
        <div id="error-box">
          <div class="dot"></div>
          <div class="dot two"></div>
          <div class="face2">
            <div class="eye"></div>
            <div class="eye right"></div>
            <div class="mouth sad"></div>
          </div>
          <div class="shadow move"></div>
          <div class="message">
            <h1 class="alert heading">Error!</h1>
            <p class="content">oh no, something went wrong.</p>
          </div>
          <button
            class="button-box"
            onClick={() => navigate("/LeaveRelics", { state: props.planet })}
          >
            <h1 class="heading" style={{ color: "red" }}>
              Try again
            </h1>
          </button>
        </div>
      )}
    </div>
  );
}

export default PopupNotification;
