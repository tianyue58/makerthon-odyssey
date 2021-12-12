import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ChooseProblem from "./components/pages/ChooseProblem";
import EmotionPlanet from "./components/pages/EmotionPlanet";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ChooseProblem" element={<ChooseProblem />} />
          <Route path="/EmotionPlanet" element={<EmotionPlanet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
