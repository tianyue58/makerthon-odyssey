import React, { useState, useEffect } from "react";

import image from "../../../images/329-3.png"; 
import '../../../styles/Asteroid.css';

function A3293() {
  
  return (
    <>
    <div class="container">
    <img src = {image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
    </div>
    </>
  );
 
}

export default A3293;
