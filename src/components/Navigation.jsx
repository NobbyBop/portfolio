import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active-navLink" : "navLink")}
      >
        Home
      </NavLink>
      <NavLink
        to="/art"
        className={({ isActive }) => (isActive ? "active-navLink" : "navLink")}
      >
        Art
      </NavLink>
      <NavLink
        to="/photography"
        className={({ isActive }) => (isActive ? "active-navLink" : "navLink")}
      >
        Photography
      </NavLink>
    </nav>
  );
}

export default Navigation;
