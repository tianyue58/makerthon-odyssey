import React, { useState, useEffect } from "react";

import image from "../../images/328.png"; 
import '../../styles/Asteroid.css';

function Asteroid328() {
  
  return (
    <>
    <div class="container">
    <img src = {image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
    <figcaption>You've landed on Asteriod 328! <br/>
    98 earthlings have visited this planet today. <br/>
    Click on the buttons below to find out tips related to your issue. <br/>
    Click on the "Let's Talk" sticker to see how to seek help from others.
    </figcaption>

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

export default Asteroid328;
