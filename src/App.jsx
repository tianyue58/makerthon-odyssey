import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { useLocation } from "react-router";
import ViewAllPlanets from "./components/pages/ViewAllPlanets";
import SolutionPlanet from "./components/pages/SolutionPlanet";
import MyCollections from "./components/pages/MyCollections";
import ViewRelics from "./components/pages/ViewRelics";
import LeaveRelics from "./components/pages/LeaveRelics";
import MyRelics from "./components/pages/MyRelics";
import TipsToStayHealthy from "./components/pages/TipsToStayHealthy";
import Tips from "./components/pages/Tips";
import TipsState from "./components/pages/TipsState";
import TalkingTips from "./components/pages/TalkingTips";
import Before from "./components/pages/MeBefore";
import Conversation from "./components/pages/MeDuring";
import TalkingState from "./components/pages/TalkingStates";
import MeBefore from "./components/pages/MeBefore";
import MeDuring from "./components/pages/MeDuring";
import OtherBefore from "./components/pages/OtherBefore";
import OtherDuring from "./components/pages/OtherDuring";
import TalkingTipsOther from "./components/pages/TalkinkTipsOther";


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
          <Route
            path="/ViewAllPlanets"
            element={
              <PrivateRoute>
                <ViewAllPlanets />
              </PrivateRoute>
            }
          />
          <Route
            path="/SolutionPlanet"
            element={
              <PrivateRoute>
                <SolutionPlanet />
              </PrivateRoute>
            }
          />
          <Route
            path="/MyCollections"
            element={
              <PrivateRoute>
                <MyCollections />
              </PrivateRoute>
            }
          />
          <Route
            path="/TipsToStayHealthy"
            element={
              <PrivateRoute>
                <TipsToStayHealthy />
              </PrivateRoute>
            }
          />
          <Route
            path="/Tips"
            element={
              <PrivateRoute>
                <Tips />
              </PrivateRoute>
            }
          />
          <Route
            path="/TipsState"
            element={
              <PrivateRoute>
                <TipsState />
              </PrivateRoute>
            }
          />

          <Route
            path="/TalkingTips"
            element={
              <PrivateRoute>
                <TalkingTips />
              </PrivateRoute>
            }
          />

<Route
            path="/TalkingTipsOther"
            element={
              <PrivateRoute>
                <TalkingTipsOther />
              </PrivateRoute>
            }
          />

          <Route
            path="/MeBefore"
            element={
              <PrivateRoute>
                <MeBefore />
              </PrivateRoute>
            }
          />

          <Route
            path="/MeDuring"
            element={
              <PrivateRoute>
                <MeDuring />
              </PrivateRoute>
            }
          />

          <Route
            path="/OtherBefore"
            element={
              <PrivateRoute>
                <OtherBefore />
              </PrivateRoute>
            }
          />

          <Route
            path="/OtherDuring"
            element={
              <PrivateRoute>
                <OtherDuring />
              </PrivateRoute>
            }
          />

          <Route
            path="/TalkingState"
            element={
              <PrivateRoute>
                <TalkingState />
              </PrivateRoute>
            }
          />



          <Route
            path="/ViewRelics"
            element={
              <PrivateRoute>
                <ViewRelics />
              </PrivateRoute>
            }
          />

          <Route
            path="/LeaveRelics"
            element={
              <PrivateRoute>
                <LeaveRelics />
              </PrivateRoute>
            }
          />
          <Route
            path="/MyRelics"
            element={
              <PrivateRoute>
                <MyRelics />
              </PrivateRoute>
            }
          />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
