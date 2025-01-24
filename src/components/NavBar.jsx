import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
function NavBar() {
  let scrollText =
    "WHAT WILL YOU FIND? WHAT WILL YOU THINK? WHAT WILL YOU FEEL? WHAT WILL YOU LEARN? YOU'RE HERE. WHAT WILL YOU FIND? WHAT WILL YOU THINK? WHAT WILL YOU FEEL? WHAT WILL YOU LEARN?";
  return (
    <div className="navContainer">
      <NavLink className="headerNavLink" to="/">
        <h1>Nicholas Mirigliani</h1>
      </NavLink>
      <Navigation />
      <p className="scrolling-textB">
        <div className="scrolling-text-innerA">
          {scrollText}&nbsp;{scrollText}
        </div>
      </p>
    </div>
  );
}
export default NavBar;
