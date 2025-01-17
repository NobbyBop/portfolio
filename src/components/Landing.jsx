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
  return (
    <div className="landingContainer">
      <div className="landingContents">
        <h1 className="landingTitle">Nicholas Mirigliani</h1>
        <p className="landingSubtitle">{subtitle}</p>
        <Navigation />
      </div>
    </div>
  );
}
export default Landing;
