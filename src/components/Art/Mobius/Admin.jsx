import Navigation from "./Navigation";

function Admin() {
  return (
    <div className="mobiusPageContainer">
      <Navigation />
      <h2>Admin</h2>
      <p>
        We're storing most files we're gonna post on this website on the{" "}
        <a href="https://drive.google.com/drive/folders/161hJEPpPmpSbb_hw7ucV-DSx_AdZDA0S?usp=drive_link">
          drive
        </a>
        .
      </p>
    </div>
  );
}

export default Admin;
