import NavBar from "./NavBar";
function Art_Comfort() {
  const items = [
    {
      id: 1,
      title: "3",
      image: `${import.meta.env.BASE_URL}comfort/1.JPG`,
      comment: "The comfort of my college bedroom which I have since left.",
    },
    {
      id: 2,
      title: "1.5",
      image: `${import.meta.env.BASE_URL}comfort/2.JPG`,
      comment:
        "Looking in the mirror for too long and feeling like an alien, uncomfortable in my own skin.",
    },
    {
      id: 3,
      title: "Overwhelm",
      image: `${import.meta.env.BASE_URL}comfort/3.JPG`,
      comment:
        "Realizing all the things you don't know about the world. How can you find comfort when you'll never know everything?",
    },
    {
      id: 4,
      title: "'Hold on' and a journal entry",
      image: `${import.meta.env.BASE_URL}comfort/4.JPG`,
      comment: "Comfort in romantic partners who aren't in your life forever.",
    },
    {
      id: 5,
      title: "Comfort/Chaos",
      image: `${import.meta.env.BASE_URL}comfort/5.JPG`,
      comment: "Struggling to find comfort amid anxiety.",
    },
    {
      id: 6,
      title: "Coping/Winning",
      image: `${import.meta.env.BASE_URL}comfort/6.JPG`,
      comment: "The comfort of coping mechanisms, positive or not.",
    },
    {
      id: 7,
      title: "Concept",
      image: `${import.meta.env.BASE_URL}comfort/concept.JPG`,
      comment: "My initial planning.",
    },
  ];

  return (
    <div className="sketchOuterContainer">
      <div className="navBarDiv">
        <NavBar />
      </div>
      <div className="sketchTitle">
        <h2>On Comfort...</h2>
        <p>
          "On Comfort..." is a series of 6 drawings I did over 2024. My initial
          concept, as you'll see below, was to capture the feeling of those
          places that we grow comfortable in, especially those that we'll never
          see again. A dorm room, a friend's apartment. This expanded to
          exploring the feeling of comfort across a range of situations.
          Comfortability in your own skin, comfortability in your mind. This
          project ultimately strayed away from that initial concept but resulted
          in a distinct set of drawings regardless.
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
