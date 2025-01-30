import NavBar from "../NavBar";
function Art_Comfort() {
  const body = document.body;
  body.className = "default-bg";

  return (
    <div className="sketchOuterContainer">
      <div className="navBarDiv">
        <NavBar scrollText="HAVE YOU HEARD THIS SONG? HAVE YOU HEARD THIS SONG? HAVE YOU HEARD THIS SONG? HAVE YOU HEARD THIS SONG?" />
      </div>
      <div className="sketchTitle">
        <h2>MOBIUS LINE</h2>
        <p>
          MOBIUS LINE is a ARG (Augmented Reality Game) which I co-created with
          Sumner Badzik.{" "}
        </p>
      </div>
      <div className="sketchContainer">
        {items.map((project) => (
          <div className="sketchDiv" key={project.id}>
            <img className="sketchImage" src={project.image} />
            <h2>{project.title}</h2>
            <p>{project.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Art_Comfort;
