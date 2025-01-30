// import { SnavLink } from "react-router-dom";
import SnavLink from "../../SnavLink";
import NavBar from "../../NavBar";

function Art_Attention() {
  const body = document.body;
  body.className = "default-bg";
  const pageList = Array.from({ length: 18 }, (_, i) => (i + 1).toString());
  return (
    <div className="attentionOuterContainer">
      <div className="navBarDiv">
        <NavBar scrollText="ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION! ATTENTION!" />
      </div>
      <div className="attentionBody">
        <img
          className="attentionTitle"
          src={`${import.meta.env.BASE_URL}attention/title.png`}
        />
        <br></br>
        <SnavLink to="/art/attention/">BACK TO MAIN PAGE</SnavLink>
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
        <SnavLink to="/art/attention/">BACK TO MAIN PAGE</SnavLink>
      </div>
    </div>
  );
}
export default Art_Attention;
