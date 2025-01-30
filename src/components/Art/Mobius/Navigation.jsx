import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <img
        className="mobiusSiteTitle"
        src={`${import.meta.env.BASE_URL}mobius/text_logo.png`}
      />
      <nav className="navigation">
        <NavLink
          to="/mobiusline/home"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Home
        </NavLink>
        <NavLink
          to="/mobiusline/merch"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Merch
        </NavLink>
        <NavLink
          to="/mobiusline/tour"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Tour
        </NavLink>
        <NavLink
          to="/mobiusline/newsletter"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Newsletter
        </NavLink>
        <NavLink
          to="/mobiusline/faq"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          FAQ
        </NavLink>
        <NavLink
          to="/mobiusline/releases"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Releases
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
