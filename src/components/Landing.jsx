import Navigation from "./Navigation";

function Landing() {
  let subtitles = [
    "it's orange season...",
    "wilkomen, bienvenue, welcome.",
    "drunk cigarettes don't count..?",
    "developer. artist. third thing.",
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
