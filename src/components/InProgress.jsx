import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
function InProgress() {
  return (
    <>
      <NavBar />
      <div className="wipDiv">
        <p>In progress!</p>
      </div>
    </>
  );
}
export default InProgress;
