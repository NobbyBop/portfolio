import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/home" className="navLink">
        Home
      </NavLink>
      <NavLink to="/art" className="navLink">
        Art
      </NavLink>
      <NavLink to="/photography" className="navLink">
        Photography
      </NavLink>
      <NavLink to="/socials" className="navLink">
        Socials
      </NavLink>
    </nav>
  );
}

export default Navigation;
