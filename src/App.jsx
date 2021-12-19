import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/pages/Home";
import ChooseProblem from "./components/pages/ChooseProblem";
import EmotionPlanet from "./components/pages/EmotionPlanet";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./components/context/AuthContext";
import SignUp from "./components/pages/authentication/SignUp";
import LogIn from "./components/pages/authentication/LogIn";
import ForgotPassword from "./components/pages/authentication/ForgotPassword";
import UserProfile from "./components/pages/authentication/UserProfile";
import UpdateProfile from "./components/pages/authentication/UpdateProfile";
import Asteroid325 from "./components/pages/planets/Asteroid325";
import Asteroid326 from "./components/pages/planets/Asteroid326";
import Asteroid327 from "./components/pages/planets/Asteroid327";
import Asteroid328 from "./components/pages/planets/Asteroid328";
import Asteroid329 from "./components/pages/planets/Asteroid329";
import Asteroid330 from "./components/pages/planets/Asteroid330";
import ViewPlanets from "./components/pages/ViewPlanets";
import A3251 from "./components/pages/solutions/A3251";
import A3252 from "./components/pages/solutions/A3252";
import A3253 from "./components/pages/solutions/A3253";
import A3254 from "./components/pages/solutions/A3254";
import A3255 from "./components/pages/solutions/A3255";
import A3256 from "./components/pages/solutions/A3256";
import A3261 from "./components/pages/solutions/A3261";
import A3262 from "./components/pages/solutions/A3262";
import A3263 from "./components/pages/solutions/A3263";
import A3264 from "./components/pages/solutions/A3264";
import A3265 from "./components/pages/solutions/A3265";
import A3266 from "./components/pages/solutions/A3266";
import A3271 from "./components/pages/solutions/A3271";
import A3272 from "./components/pages/solutions/A3272";
import A3273 from "./components/pages/solutions/A3273";
import A3274 from "./components/pages/solutions/A3274";
import A3275 from "./components/pages/solutions/A3275";
import A3276 from "./components/pages/solutions/A3276";
import A3281 from "./components/pages/solutions/A3281";
import A3282 from "./components/pages/solutions/A3282";
import A3283 from "./components/pages/solutions/A3283";
import A3291 from "./components/pages/solutions/A3291";
import A3292 from "./components/pages/solutions/A3292";
import A3293 from "./components/pages/solutions/A3293";
import A3301 from "./components/pages/solutions/A3301";
import A3302 from "./components/pages/solutions/A3302";
import A3303 from "./components/pages/solutions/A3303";
import A3257 from "./components/pages/solutions/A3257";
import A3267 from "./components/pages/solutions/A3267";
import A3277 from "./components/pages/solutions/A3277";
import A3284 from "./components/pages/solutions/A3284";
import A3294 from "./components/pages/solutions/A3294";
import A3304 from "./components/pages/solutions/A330-4";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { useLocation } from "react-router";

function App() {
  const [currentPath, setCurrentPath] = useState();
  const location = useLocation();

  useEffect(() => setCurrentPath(location.pathname), [location.pathname]);
  return (
    <AuthProvider>
      <NavBar currentPath={currentPath} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/ChooseProblem"
            element={
              <PrivateRoute>
                <ChooseProblem />
              </PrivateRoute>
            }
          />
          <Route
            path="/EmotionPlanet"
            element={
              <PrivateRoute>
                <EmotionPlanet />
              </PrivateRoute>
            }
          />
          <Route
            path="/UpdateProfile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/UserProfile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />

          <Route path="Asteroid325" element={<Asteroid325 />} />
          <Route path="Asteroid326" element={<Asteroid326 />} />
          <Route path="Asteroid327" element={<Asteroid327 />} />
          <Route path="Asteroid328" element={<Asteroid328 />} />
          <Route path="Asteroid329" element={<Asteroid329 />} />
          <Route path="Asteroid330" element={<Asteroid330 />} />
          <Route path="ViewPlanets" element={<ViewPlanets />} />
          <Route path="A3251" element={<A3251 />} />
          <Route path="A3252" element={<A3252 />} />
          <Route path="A3253" element={<A3253 />} />
          <Route path="A3254" element={<A3254 />} />
          <Route path="A3255" element={<A3255 />} />
          <Route path="A3256" element={<A3256 />} />
          <Route path="A3261" element={<A3261 />} />
          <Route path="A3262" element={<A3262 />} />
          <Route path="A3263" element={<A3263 />} />
          <Route path="A3264" element={<A3264 />} />
          <Route path="A3265" element={<A3265 />} />
          <Route path="A3266" element={<A3266 />} />
          <Route path="A3271" element={<A3271 />} />
          <Route path="A3272" element={<A3272 />} />
          <Route path="A3273" element={<A3273 />} />
          <Route path="A3274" element={<A3274 />} />
          <Route path="A3275" element={<A3275 />} />
          <Route path="A3276" element={<A3276 />} />
          <Route path="A3281" element={<A3281 />} />
          <Route path="A3282" element={<A3282 />} />
          <Route path="A3283" element={<A3283 />} />
          <Route path="A3291" element={<A3291 />} />
          <Route path="A3292" element={<A3292 />} />
          <Route path="A3293" element={<A3293 />} />
          <Route path="A3301" element={<A3301 />} />
          <Route path="A3302" element={<A3302 />} />
          <Route path="A3303" element={<A3303 />} />
          <Route path="A3257" element={<A3257 />} />
          <Route path="A3267" element={<A3267 />} />
          <Route path="A3277" element={<A3277 />} />
          <Route path="A3284" element={<A3284 />} />
          <Route path="A3294" element={<A3294 />} />
          <Route path="A3304" element={<A3304 />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
