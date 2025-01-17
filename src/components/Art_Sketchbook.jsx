import NavBar from "./NavBar";
import InProgress from "./InProgress";
function Art_Sketchbook() {
  const items = [
    {
      id: 1,
      title: "Birthday Sketches at Pier A",
      image: "/sketchbook/BIRTHDAY.JPG",
      comment: "",
    },
    {
      id: 2,
      title: "BLOOM II",
      image: "/sketchbook/BLOOM_II.JPG",
      comment: "",
    },
    {
      id: 3,
      title: "BOXED IN",
      image: "/sketchbook/BOXED_IN.JPG",
      comment: "",
    },
    {
      id: 4,
      title: "Chairs",
      image: "/sketchbook/CHAIRS.JPG",
      comment: "",
    },
    {
      id: 5,
      title: "The Concert",
      image: "/sketchbook/CONCERT.JPG",
      comment: "",
    },
    {
      id: 6,
      title: "Euphoria Run",
      image: "/sketchbook/EUPHORIA_RUN.JPG",
      comment: "My favorite place to go for runs back home in Forty-Fort, PA.",
    },
    {
      id: 7,
      title: "On Being A Real Human Being",
      image: "/sketchbook/HUMAN.JPG",
      comment: "",
    },
    {
      id: 8,
      title: "LONG",
      image: "/sketchbook/LONG.JPG",
      comment: "",
    },
    {
      id: 9,
      title: "ORANGE SEASON 2",
      image: "/sketchbook/OS2.JPG",
      comment:
        "The most recent sketch of mine relating to ORANGE SEASON, a concept album I wrote over a few years (never recorded).",
    },
    {
      id: 10,
      title: "PEER",
      image: "/sketchbook/PEER.JPG",
      comment: "",
    },
    {
      id: 11,
      title: "Front Yard Plant",
      image: "/sketchbook/PLANT.JPG",
      comment: "",
    },
    {
      id: 12,
      title: "SAD",
      image: "/sketchbook/SAD.JPG",
      comment: "",
    },
    {
      id: 13,
      title: "Spotlight",
      image: "/sketchbook/SPOTLIGHT.JPG",
      comment: "",
    },
    {
      id: 14,
      title: "'She looks like Susan.'",
      image: "/sketchbook/SUSAN.JPG",
      comment:
        "My favorite line from the movie 'Tick, Tick... Boom!' Appears in the song titled 'Swimming.'",
    },
    {
      id: 15,
      title: "UGH!",
      image: "/sketchbook/UGH.JPG",
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
          Below are some of my favorite sketches (alphabetically) I've worked on
          over the past few years (starting circa 2022). This sketchbook has
          been a primary emotional outlet for me, so a lot of the pieces here
          were highly pertinent to whatever was going on in my life at the time
          I drew them. While they certainly are not my most polished or time
          consuming work, I feel that these sketches have style, which is
          something I have developed to be (I'd say) pretty unique, and I am
          proud of that.
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
