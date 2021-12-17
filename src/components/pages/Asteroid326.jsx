import React, { useState, useEffect } from "react";

import image from "../../images/326.png"; 
import Home from "./Home";

function Asteroid326() {
  
  return (
    //   <InnerWrapper>
    //       <div  style={sectionStyle} >
    //              <h1>This is Asteroid 325!</h1>
    //     </div>)
    //   </InnerWrapper>
    //     );
    <>
    
    <img src = {image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
    <figcaption>You've landed on Asteriod 326! <br/>
    86 earthlings have visited this planet today. <br/>
    Click on the buttons below to find out tips related to your issue. <br/>
    Click on the "Let's Talk" sticker to see how to seek help from others.
    </figcaption>
    
    </>
  );
 
}

export default Asteroid326;
