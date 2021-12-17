import React, { useState, useEffect } from "react";
import '../../styles/Planets.css';
import image from "../../images/planets.png"; 

function ViewPlanets() {
  
  return (
    <>
    <div class="container">
        <img src = {image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
        <button class="btn1">Asteroid 325</button>
        <button class="btn2">Asteroid 326</button>
        <button class="btn3">Asteroid 327</button>
        <button class="btn4">Asteroid 328</button>
        <button class="btn5">Asteroid 329</button>
        <button class="btn6">Asteroid 330</button>
    </div>
    </>    
  );
}

export default ViewPlanets;
