import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import Art from "./Art";
import Socials from "./Socials";
import Photography from "./Photography";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </>
  );
}

export default App;
