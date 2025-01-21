import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import Art from "./Art";
import Art_Sketchbook from "./Art_Sketchbook";
import Art_Attention from "./Art_Attention";
import Art_Comfort from "./Art_Comfort";
import Art_Worldly from "./Art_Worldly";
import Photography from "./Photography";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/art/sketchbook" element={<Art_Sketchbook />} />
        <Route path="/art/comfort" element={<Art_Comfort />} />
        <Route path="/art/worldly" element={<Art_Worldly />} />
        <Route path="/art/attention" element={<Art_Attention />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </>
  );
}

export default App;
