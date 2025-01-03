import { NavLink } from "react-router-dom";
import PhSunDimFill from "../icons/PhSunDimFill";
import IxMoonFilled from "../icons/IxMoonFilled";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_links">
        <ul>
          <NavLink className="navbar_navlinks" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink className="navbar_navlinks" to="/skills">
            <li>Skills</li>
          </NavLink>
          <NavLink className="navbar_navlinks" to="/about-me">
            <li>About me</li>
          </NavLink>
        </ul>
      </div>
      <div className="theme_toggle-container">
        <PhSunDimFill className="icon_weater" />
        <IxMoonFilled className="icon_weater" />
      </div>
    </div>
  );
};
