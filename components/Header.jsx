import React from "react";
import { Link, NavLink } from "react-router-dom";
import ReactGA from "react-ga";

export default function Header() {
  const useAnalyticsEventTracker = (category = "Default Category") => {
    const eventTracker = (
      action = "Default Action",
      label = "Default Label"
    ) => {
      ReactGA.event({ category, action, label });
      console.log(`Tracking Event: Category - ${category}, Action - ${action}, Label - ${label}`);
    };
    return eventTracker;
  };

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  const gaEventTracker = useAnalyticsEventTracker("Header Nav Click"); // Set the category for header nav clicks

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife test
      </Link>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          onClick={() => gaEventTracker("Header Nav Click", "Host Link")}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          onClick={() => gaEventTracker("Header Nav Click", "About Link")}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          onClick={() => gaEventTracker("Header Nav Click", "Vans Link")}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src="../assets/images/avatar-icon.png" className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}