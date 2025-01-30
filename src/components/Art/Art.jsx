import NavBar from "../NavBar";
// import { SnavLink } from "react-router-dom";
import SnavLink from "../SnavLink";
function Art() {
  const body = document.body;
  body.className = "default-bg";
  let projects = [
    {
      id: 0,
      title: "The 'ATTENTION!' Experience",
      description:
        "This page is a digital presentation of my multi-media, multi-layered project called 'ATTENTION!' Originally an in-person, interactive experience.",
      medium: "Multimedia",
      date: "2024",
      link: "/art/attention",
      image: `${import.meta.env.BASE_URL}attention/thumbnail.png`,
    },
    {
      id: 777,
      title: "MOBIUS LINE",
      description:
        "An ARG (Augmented Reality Game) co-developed with Sumner Badzik. Players had to solve the mystery of MOBIUS LINE's unreleased song.",
      medium: "Multimedia",
      date: "2024",
      link: "/art/mobiusline",
      image: `${import.meta.env.BASE_URL}mobius/thumbnail.jpg`,
    },
    {
      id: 1,
      title: "'On Comfort...'",
      description: "A series of drawings exploring the concept of comfort.",
      medium: "Ink",
      date: "2024",
      link: "/art/comfort",
      image: `${import.meta.env.BASE_URL}comfort/thumbnail.JPG`,
    },
    {
      id: 2,
      title: "'WORLDLY'",
      description:
        "A zine about my experience with materialism, overconsumption, and identity.",
      medium: "Ballpoint pen and collage",
      date: "2023",
      link: "/art/worldly",
      image: `${import.meta.env.BASE_URL}worldly/thumbnail.JPG`,
    },
    {
      id: 0,
      title: "Sketchbook",
      description: "Some of my favorite sketches, old and new.",
      medium: "Ballpoint pen",
      date: "2022-Present",
      link: "/art/sketchbook",
      image: `${import.meta.env.BASE_URL}sketchbook/thumbnail.JPG`,
    },
  ];
  return (
    <div className="artContainer">
      <div className="navBarDiv">
        <NavBar />
      </div>
      <div className="artTitle">
        <h2>Projects</h2>
      </div>

      <div className="projectContainer">
        {projects.map((project) => (
          <div className="projectDiv" key={project.id}>
            <h2>
              <SnavLink to={project.link}>{project.title}</SnavLink>
            </h2>
            <p className="projectDesc">{project.description}</p>
            <p className="projectText">
              <b>Medium</b>: {project.medium}
            </p>
            <p className="projectText">
              <b>Date</b>: {project.date}
            </p>
            <img className="projectImage" src={project.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Art;
