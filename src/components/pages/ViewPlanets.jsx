import React, { useState, useEffect } from "react";
import '../../styles/Planets.css';
import image from "../../images/planets.png"; 
import { Link } from "react-router-dom";

function ViewPlanets() {
  
  return (
    <>
    <div class="container">
        <img src = {image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>

        <Link to="/Asteroid325">
        <button class="bn1">Asteroid 325</button>
        </Link>
        <Link to="/Asteroid326">
        <button class="bn2">Asteroid 326</button>
        </Link>
        <Link to="/Asteroid327">
        <button class="bn3">Asteroid 327</button>
        </Link>
        <Link to="/Asteroid328">
        <button class="bn4">Asteroid 328</button> 
        </Link>
        <Link to="/Asteroid329">
        <button class="bn5">Asteroid 329</button>
        </Link>
        <Link to="/Asteroid330">
        <button class="bn6">Asteroid 330</button>
        </Link>
        
    </div>
    </>    
  );
}

export default ViewPlanets;
