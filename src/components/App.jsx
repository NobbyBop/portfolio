import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
