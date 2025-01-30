import NavBar from "../../NavBar";
function Art_Mobius() {
  const body = document.body;
  body.className = "default-bg";

  return (
    <div className="sketchOuterContainer">
      <div className="navBarDiv">
        <NavBar scrollText="HAVE YOU HEARD THIS SONG? HAVE YOU HEARD THIS SONG? HAVE YOU HEARD THIS SONG? HAVE YOU HEARD THIS SONG?" />
      </div>
      <div className="sketchTitle">
        <h2>MOBIUS LINE</h2>
      </div>
      <div className="sketchContainer"></div>
      <p>
        MOBIUS LINE is a ARG (Augmented Reality Game) which I co-created with
        Sumner Badzik. It is best experienced to be played. Players would have
        posters around their neighborhood, which links to the start of the game.
        This project invovled creating branding and marketing for our fictitious
        band MOBIUS LINE, as well as crafting a narrative. On this page I have
        included some of the graphic design work I did for the project, as well
        as some of our band photos, taken by Andrew Yurovchak. I hope you'll
        take a little time to explore the game{" "}
        <a target="_blank" href="https://m.youtube.com/watch?v=VJmVcI-avlE">
          here
        </a>
        .
      </p>
    </div>
  );
}
export default Art_Mobius;
