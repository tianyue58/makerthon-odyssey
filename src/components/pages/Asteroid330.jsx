import React, { useState, useEffect } from "react";

import image from "../../images/330.png"; 

function Asteroid330() {
  
  return (
    <>
    
    <img src = {image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
    <figcaption>You've landed on Asteriod 330! <br/>
    72 earthlings have visited this planet today. <br/>
    Click on the buttons below to find out tips related to your issue. <br/>
    Click on the "Let's Talk" sticker to see how to seek help from others.
    </figcaption>
    </>
  );
 
}

export default Asteroid330;
