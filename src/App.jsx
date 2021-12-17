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
import Asteroid325 from "./components/pages/Asteroid325";
import Asteroid326 from "./components/pages/Asteroid326";
import Asteroid327 from "./components/pages/Asteroid327";
import Asteroid328 from "./components/pages/Asteroid328";
import Asteroid329 from "./components/pages/Asteroid329";
import Asteroid330 from "./components/pages/Asteroid330";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
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
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;