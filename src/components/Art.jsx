import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
function Art() {
  let projects = [
    {
      id: 0,
      title: "Sketchbook",
      description: "Some of my favorite sketches, old and new.",
      medium: "Ballpoint pen",
      date: "2022-Present",
      image: "src/assets/sketchbook/SAD.JPG",
    },
    {
      id: 1,
      title: "On Comfort...",
      description: "A series of drawings exploring the concept of comfort.",
      medium: "Ink",
      date: "2024",
      image: "src/assets/comfort/1.JPG",
    },
    {
      id: 2,
      title: "WORLDLY",
      description:
        "A zine about my experiences with materialism, overconsumption, and identity.",
      medium: "Ballpoint pen and collage",
      date: "2023",
      image: "src/assets/worldly/1.JPG",
    },
  ];
  return (
    <div className="artContainer">
      <div className="navBarDiv">
        <NavBar />
      </div>
      <div className="projectContainer">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div className="projectDiv">
            <div className="projectTextDiv">
              <h3>
                <NavLink to="/art/sketchbook">{project.title}</NavLink>
              </h3>
              <p>{project.description}</p>
              <p>
                <b>Medium</b>: {project.medium}
              </p>
              <p>
                <b>Date</b>: {project.date}
              </p>
            </div>
            <img className="projectImage" src={project.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Art;
