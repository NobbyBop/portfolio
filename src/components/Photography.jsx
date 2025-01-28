import NavBar from "./NavBar";
function Photography() {
  const photoNames = [
    "24-09-07-a.png",
    "24-09-07-b.JPG",
    "24-09-07-c.JPG",
    "24-09-07-d.JPG",
    "24-09-07-e.JPG",
    "24-09-14-a.JPG",
    "24-09-14-b.JPG",
    "24-09-14-c.JPG",
    "24-09-14-d.JPG",
    "24-09-14-e.JPG",
    "24-09-14-f.JPG",
    "24-09-14-g.JPG",
    "24-09-14-h.JPG",
    "24-09-21-a.JPG",
    "24-09-21-b.JPG",
    "24-09-21-c.JPG",
    "24-09-21-d.JPG",
    "24-09-21-e.JPG",
    "24-10-06-a.JPG",
    "24-10-06-b.JPG",
    "24-10-06-c.JPG",
    "24-12-15-a.JPG",
    "24-12-15-b.JPG",
    "24-12-23-a.JPG",
    "25-01-04-a.JPG",
    "25-01-04-b.JPG",
    "25-01-04-c.JPG",
    "25-01-18-a.JPG",
    "25-01-18-b.JPG",
    "25-01-18-c.JPG",
    "25-01-18-d.JPG",
  ];

  return (
    <div className="photoContainer">
      <div className="navBarDiv">
        <NavBar />
      </div>
    </div>
  );
}
export default Photography;
