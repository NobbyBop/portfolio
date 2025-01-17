import NavBar from "./NavBar";
import InProgress from "./InProgress";
function Art_Sketchbook() {
  const items = [
    {
      id: 1,
      title: "Birthday Sketches at Pier A",
      image: `${import.meta.env.BASE_URL}sketchbook/BIRTHDAY.JPG`,
      comment: "",
    },
    {
      id: 2,
      title: "BLOOM II",
      image: `${import.meta.env.BASE_URL}sketchbook/BLOOM_II.JPG`,
      comment: "",
    },
    {
      id: 3,
      title: "BOXED IN",
      image: `${import.meta.env.BASE_URL}sketchbook/BOXED_IN.JPG`,
      comment: "",
    },
    {
      id: 4,
      title: "Chairs",
      image: `${import.meta.env.BASE_URL}sketchbook/CHAIRS.JPG`,
      comment: "",
    },
    {
      id: 5,
      title: "The Concert",
      image: `${import.meta.env.BASE_URL}sketchbook/CONCERT.JPG`,
      comment: "",
    },
    {
      id: 6,
      title: "Euphoria Run",
      image: `${import.meta.env.BASE_URL}sketchbook/EUPHORIA_RUN.JPG`,
      comment: "My favorite place to go for runs back home in Forty-Fort, PA.",
    },
    {
      id: 7,
      title: "On Being A Real Human Being",
      image: `${import.meta.env.BASE_URL}sketchbook/HUMAN.JPG`,
      comment: "",
    },
    {
      id: 8,
      title: "LONG",
      image: `${import.meta.env.BASE_URL}sketchbook/LONG.JPG`,
      comment: "",
    },
    {
      id: 9,
      title: "ORANGE SEASON 2",
      image: `${import.meta.env.BASE_URL}sketchbook/OS2.JPG`,
      comment:
        "The most recent sketch of mine relating to ORANGE SEASON, a concept album I wrote over a few years (never recorded).",
    },
    {
      id: 10,
      title: "PEER",
      image: `${import.meta.env.BASE_URL}sketchbook/PEER.JPG`,
      comment: "",
    },
    {
      id: 11,
      title: "Front Yard Plant",
      image: `${import.meta.env.BASE_URL}sketchbook/PLANT.JPG`,
      comment: "",
    },
    {
      id: 12,
      title: "SAD",
      image: `${import.meta.env.BASE_URL}sketchbook/SAD.JPG`,
      comment: "",
    },
    {
      id: 13,
      title: "Spotlight",
      image: `${import.meta.env.BASE_URL}sketchbook/SPOTLIGHT.JPG`,
      comment: "",
    },
    {
      id: 14,
      title: "'She looks like Susan.'",
      image: `${import.meta.env.BASE_URL}sketchbook/SUSAN.JPG`,
      comment:
        "My favorite line from the movie 'Tick, Tick... Boom!' Appears in the song titled 'Swimming.'",
    },
    {
      id: 15,
      title: "UGH!",
      image: `${import.meta.env.BASE_URL}sketchbook/UGH.JPG`,
      comment: "",
    },
  ];

  return (
    <div className="sketchOuterContainer">
      <div className="navBarDiv">
        <NavBar />
      </div>
      <div className="sketchTitle">
        <h2>Sketchbook</h2>
        <p>
          These are some of my favorite sketches (alphabetically) I've done on
          over the past few years (starting circa 2022). Most are done in
          ballpoint pen, although some use other kinds of ink pens. This
          sketchbook has been a primary emotional outlet for me for the past few
          years, and these pieces articulate the sense of style I've developed
          over that time.
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
export default Art_Sketchbook;
