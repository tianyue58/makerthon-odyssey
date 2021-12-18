import React, { useState, useEffect } from "react";

import image from "../../images/327.png"; 
import '../../styles/Asteroid.css';

function Asteroid327() {
  
  return (
    <>
    
    <div class="container">
    <img src = {image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
    <div class = "figcaption">You've landed on Asteriod 327! 
    93 earthlings have visited this planet today. <br/>
    <br/>
    Click on the buttons below to find out tips related to your issue. 
    Click on the "Let's Talk" sticker to see how to seek help from others.
    </div>

    <button class="btn1">Button1</button>
      <button class="btn2">Button2</button>
      <button class="btn3">Button3</button>
      <button class="btn4">Button4</button>
      <button class="btn5">Button5</button>
      <button class="btn6">Button6</button>
    </div>
    </>
  );
 
}

export default Asteroid327;
