import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ChooseProblem from "./components/pages/ChooseProblem";
import EmotionPlanet from "./components/pages/EmotionPlanet";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./components/context/AuthContext";
import SignUp from "./components/pages/authentication/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/ChooseProblem" element={<ChooseProblem />} />
            <Route path="/EmotionPlanet" element={<EmotionPlanet />} />
            <Route path="SignUp" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
