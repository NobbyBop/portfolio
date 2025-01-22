import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
function Art_Attention() {
  const pageList = Array.from({ length: 23 }, (_, i) => (i + 1).toString());
  return (
    <div className="attentionOuterContainer">
      <div className="navBarDiv">
        <NavBar />
      </div>
      <div className="attentionBody">
        <img
          className="attentionTitle"
          src={`${import.meta.env.BASE_URL}attention/title.png`}
        />
        <br></br>
        <NavLink to="/art/attention/">BACK TO MAIN PAGE</NavLink>
        <h2>PART THREE: THE USB</h2>
        <p>PLEASE FIND THE SLIDES OF THE PRESENTATION BELOW.</p>
        <div className="attentionPageList">
          {pageList.map((page) => (
            <img
              className="attentionPage"
              src={`${
                import.meta.env.BASE_URL
              }attention/presentation_slides/${page}.png`}
            />
          ))}
        </div>
        <NavLink to="/art/attention/">BACK TO MAIN PAGE</NavLink>
      </div>
    </div>
  );
}
export default Art_Attention;
