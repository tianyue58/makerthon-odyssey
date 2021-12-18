import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../images/326.png"; 
import Home from "./Home";
import '../../styles/Asteroid.css';

function Asteroid326() {
  
  return (
    //   <InnerWrapper>
    //       <div  style={sectionStyle} >
    //              <h1>This is Asteroid 325!</h1>
    //     </div>)
    //   </InnerWrapper>
    //     );
    <>
    <div class="container">
    <img src = {image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
    <div class = "figcaption">You've landed on Asteriod 326! 
    86 earthlings have visited this planet today. <br/>
    <br/>
    Click on the buttons below to find out tips related to your issue. 
    Click on the "Let's Talk" sticker to see how to seek help from others.
    </div>

    <Link to="/A3261">
    <button class="btn1">Button1</button>
    </Link>

    <Link to="/A3262">
    <button class="btn2">Button2</button>
    </Link>

    <Link to="/A3263">
    <button class="btn3">Button3</button>
    </Link>

    <Link to="/A3264">
    <button class="btn4">Button4</button>
    </Link>
      
    <Link to="/A3265">
    <button class="btn5">Button5</button>
    </Link>

    <Link to="/A3266">
    <button class="btn6">Button6</button>
    </Link>
    </div>
    
    
    </>
  );
 
}

export default Asteroid326;
