import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import Art from "./Art/Art";
import Art_Sketchbook from "./Art/Art_Sketchbook";
import Art_Attention from "./Art/Attention/Art_Attention";
import Art_Attention_Packet from "./Art/Attention/Art_Attention_Packet";
import Art_Attention_Presentation from "./Art/Attention/Art_Attention_Presentation";
import Art_Attention_Participants from "./Art/Attention/Art_Attention_Participants";
import Art_Comfort from "./Art/Art_Comfort";
import Art_Worldly from "./Art/Art_Worldly";
import Photography from "./Photography";
import Blog from "./Blog";
import MobiusHome from "./Art/Mobius/Home";
import MobiusAdmin from "./Art/Mobius/Admin";
import MobiusFAQ from "./Art/Mobius/FAQ";
import MobiusMerch from "./Art/Mobius/Merch";
import MobiusNewsletter from "./Art/Mobius/Newsletter";
import MobiusReleases from "./Art/Mobius/Releases";
import MobiusTour from "./Art/Mobius/Tour";
import Art_Mobius from "./Art/Mobius/Art_Mobius";

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
        <Route
          path="/art/attention/packet"
          element={<Art_Attention_Packet />}
        />
        <Route
          path="/art/attention/presentation"
          element={<Art_Attention_Presentation />}
        />
        <Route
          path="/art/attention/participants"
          element={<Art_Attention_Participants />}
        />
        <Route path="/art/mobiusline" element={<Art_Mobius />} />
        <Route path="/mobiusline/home" element={<MobiusHome />} />
        <Route path="/mobiusline/faq" element={<MobiusFAQ />} />
        <Route path="/mobiusline/tour" element={<MobiusTour />} />
        <Route path="/mobiusline/releases" element={<MobiusReleases />} />
        <Route path="/mobiusline/merch" element={<MobiusMerch />} />
        <Route path="/mobiusline/newsletter" element={<MobiusNewsletter />} />
        <Route path="/mobiusline/admin" element={<MobiusAdmin />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
