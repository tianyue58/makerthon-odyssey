import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import image from "../../images/325.png"; 
import '../../styles/Asteroid.css';
import { InnerWrapper, LightButton} from "../../styles/Asteroid";
import { findByLabelText } from "@testing-library/react";


function Asteroid325() {
  
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
      <figcaption>You've landed on Asteriod 325! <br/>
      79 earthlings have visited this planet today. <br/>
      Click on the buttons below to find out tips related to your issue. <br/>
      Click on the "Let's Talk" sticker to see how to seek help from others.
      </figcaption>

      <button class="btn1">Button1</button>
      <button class="btn2">Button2</button>
      <button class="btn3">Button3</button>
      <button class="btn4">Button4</button>
      <button class="btn5">Button5</button>
      <button class="btn6">Button6</button>

    {/* <Link to="/ChooseProblem">
            <LightButton>
              Stay Active
            </LightButton>
          </Link> */}
    </div>
    
    </>
    

    
    
    // <backgroundImage src = {image} style={{backgroundSize: 'cover'}}/>
        
     
  );
 
}

export default Asteroid325;
