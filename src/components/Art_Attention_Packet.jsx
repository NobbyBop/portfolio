import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
function Art_Attention() {
  const pageList = Array.from({ length: 18 }, (_, i) => (i + 1).toString());
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
        <NavLink to="/art/attention/">BACK TO MAIN PAGE</NavLink>
        <h2>PART TWO: THE BOOK</h2>
        <p>PLEASE FIND THE PAGES OF THE INSTRUCTION BOOK BELOW.</p>
        <div className="attentionPageList">
          {pageList.map((page) => (
            <img
              className="attentionPage"
              src={`${
                import.meta.env.BASE_URL
              }attention/packet_pages/${page}.png`}
            />
          ))}
        </div>
        <NavLink to="/art/attention/">BACK TO MAIN PAGE</NavLink>
      </div>
    </div>
  );
}
export default Art_Attention;
