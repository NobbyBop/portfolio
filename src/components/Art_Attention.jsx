import NavBar from "./NavBar";
function Art_Attention() {
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
        <p>
          THIS PROJECT IS A MULTI-LAYERED, MULTI-MEDIA EXPERIENCE THAT IS
          INTENTED TO BE EXPERIENCED IN-PERSON IN AN INTERACTIVE STYLE. IN LIEU
          OF THAT, BELOW IS A DIGITAL DISPLAY OF THE PROJECT, ALONG WITH
          COMMENTARY TO HELP GUIDE THE EXPERIENCE. AS EXPLAINED PREVIOUSLY. THIS
          DIGITAL FORMAT ADDS YET ANOTHER LAYER TO ATTENTION. PLEASE BE SURE TO
          FOLLOW ALONG CLOSELY THOUGHOUT THE DISPLAY. FOR A COMPLETE
          UNDERSTANDING, PLEASE CONSULT THE SUPPLEMENTAL DIAGRAM BELOW.
        </p>
        <img
          className="attentionImage"
          src={`${import.meta.env.BASE_URL}attention/webdiagram1.png`}
        />
        <h2>PART ONE: THE ENVELOPE</h2>
        <p>PARTICIPANTS OF THE "ATTENTION" EXPERIENCE</p>
      </div>
    </div>
  );
}
export default Art_Attention;
