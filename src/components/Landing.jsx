import Navigation from "./Navigation";

function Landing() {
  let subtitles = [
    "it's orange season...",
    "wilkomen, bienvenue, welcome.",
    "developer. artist. third thing.",
    "wilkes-barre, pa has the world's best pizza.",
    "oh hi.",
    "son of a gun...",
  ];
  let subtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
  let scrollTextA =
    "WELCOME. ARE YOU READY? THE TIME IS NOW. DON'T BE AFRAID. A WHOLE WORLD LIES AHEAD.";
  let scrollTextB =
    "YOU'RE LATE. GET A MOVE ON. WHAT ARE YOU WAITING FOR? THE WORLD WILL CRUMBLE AT YOUR FEET.";
  return (
    <div className="landingContainer">
      <h1 className="scrolling-text">
        <div className="scrolling-text-innerA">
          {scrollTextA}&nbsp;{scrollTextA}
        </div>
      </h1>
      <div className="landingContents">
        {/* <div className="scroller">
          <h1 className="scroll-text">
            WELCOME. YOU ARE EARLY. THE NEXT BIG THING. WELCOME. YOU ARE EARLY.
            THE NEXT BIG THING. WELCOME. YOU ARE EARLY. THE NEXT BIG THING.
            WELCOME. YOU ARE EARLY. THE NEXT BIG THING. WELCOME. YOU ARE EARLY.
            THE NEXT BIG THING. WELCOME. YOU ARE EARLY. THE NEXT BIG THING.
          </h1>
        </div> */}

        <h1 className="landingTitle">Nicholas Mirigliani</h1>
        <p className="landingSubtitle">{subtitle}</p>
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
