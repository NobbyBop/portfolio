// import { SnavLink } from "react-router-dom";
import SnavLink from "./SnavLink";
function Navigation() {
  return (
    <nav className="navigation">
      <SnavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active-navLink" : "navLink")}
      >
        Home
      </SnavLink>
      <SnavLink
        to="/art"
        className={({ isActive }) => (isActive ? "active-navLink" : "navLink")}
      >
        Art
      </SnavLink>
      <SnavLink
        to="/photography"
        className={({ isActive }) => (isActive ? "active-navLink" : "navLink")}
      >
        Photography
      </SnavLink>
    </nav>
  );
}

export default Navigation;
