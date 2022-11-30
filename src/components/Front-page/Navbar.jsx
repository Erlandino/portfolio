import { HashLink } from "react-router-hash-link";
import hamburgerMenu from "../../media/menu-hamburger.svg";
import { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <nav className="nav">
      <ul className="nav__ul">
        {showNavbar && (
          <li className="nav__ul__li">
            <HashLink className="nav__ul__li__a" smooth to="/path#introduction">
              Home
            </HashLink>
          </li>
        )}
        {showNavbar && (
          <li className="nav__ul__li">
            <HashLink className="nav__ul__li__a" smooth to="/path#aboutMe">
              About me
            </HashLink>
          </li>
        )}
        {showNavbar && (
          <li className="nav__ul__li">
            <HashLink className="nav__ul__li__a" smooth to="/path#projects">
              Projects
            </HashLink>
          </li>
        )}
        {showNavbar && (
          <li className="nav__ul__li">
            <HashLink className="nav__ul__li__a" smooth to="/path#contact">
              Contact
            </HashLink>
          </li>
        )}
        <li className="nav__ul__li" onClick={() => setShowNavbar((prevState) => !prevState)}>
          <img src={hamburgerMenu} alt="Hamburger navbar menu" className="nav__ul__li__menu" />
        </li>
      </ul>
    </nav>
  );
}
