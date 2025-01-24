import Navigation from "./Navigation";
import { useState } from "react";
function Landing() {
  let subtitles = [
    "developer. artist. quote collector.",
    "wilkomen, bienvenue, welcome.",
    "i would've stolen you a whole orchestra.",
    "see you space cowboy...",
    "the best jerry, the best!",
  ];
  let [subtitle, setSubtitle] = useState("developer. artist. quote collector.");
  let [subtitleIndex, setSubtitleIndex] = useState(0);
  let scrollTextA =
    "WELCOME. ARE YOU READY? THE TIME IS NOW. DON'T BE AFRAID. A WHOLE WORLD LIES AHEAD.";
  let scrollTextB =
    "YOU'RE LATE. GET A MOVE ON. WHAT ARE YOU WAITING FOR? THE WORLD WILL CRUMBLE AT YOUR FEET.";

  const handleRefresh = function () {
    setSubtitleIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % subtitles.length;
      setSubtitle(subtitles[newIndex]);
      return newIndex;
    });
  };
  return (
    <div className="landingContainer">
      <h1 className="scrolling-text">
        <div className="scrolling-text-innerA">
          {scrollTextA}&nbsp;{scrollTextA}
        </div>
      </h1>
      <div className="landingContents">
        <h1 className="landingTitle">Nicholas Mirigliani</h1>
        <p className="landingSubtitle">
          <button onClick={handleRefresh}>{subtitle}</button>
        </p>
        <Navigation />
      </div>
      <h1 className="scrolling-text">
        <div className="scrolling-text-innerB">
          {scrollTextB}&nbsp;{scrollTextB}
        </div>
      </h1>
    </div>
  );
}
export default Landing;
