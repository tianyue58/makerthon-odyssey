import React, { useState, useEffect } from "react";

import image from "../../../images/327-5.png"; 
import '../../../styles/Asteroid.css';

function A3275() {
  
  return (
    <>
    <div class="container">
    <img src = {image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
    </div>
    </>
  );
 
}

export default A3275;
