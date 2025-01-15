import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
function NavBar() {
  return (
    <div className="navContainer">
      <NavLink to="/">
        <h1 class>Nicholas Mirigliani</h1>
      </NavLink>
      <Navigation />
    </div>
  );
}
export default NavBar;
