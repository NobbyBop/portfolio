import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
function NavBar() {
  return (
    <div className="navContainer">
      <NavLink className="headerNavLink" to="/">
        <h1>Nicholas Mirigliani</h1>
      </NavLink>
      <Navigation />
    </div>
  );
}
export default NavBar;
