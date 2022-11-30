import { HashLink } from "react-router-hash-link";
import hamburgerMenu from "../../media/menu-hamburger.svg";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    window.innerWidth <= 600 && setShowNavbar(false);

    window.addEventListener("resize", () => {
      window.innerWidth <= 600 && setShowNavbar(false);
    });
    return () =>
      window.removeEventListener("resize", () => {
        window.innerWidth <= 600 && setShowNavbar(false);
      });
  }, []);
  return (
    <nav className="nav">
      <ul className="nav__ul">
        {showNavbar && (
          <li className="nav__ul__li">
            <HashLink className="nav__ul__li__a" smooth to="/path#introduction">
              Hjem
            </HashLink>
          </li>
        )}
        {showNavbar && (
          <li className="nav__ul__li">
            <HashLink className="nav__ul__li__a" smooth to="/path#aboutMe">
              Om meg
            </HashLink>
          </li>
        )}
        {showNavbar && (
          <li className="nav__ul__li">
            <HashLink className="nav__ul__li__a" smooth to="/path#projects">
              Prosjekter
            </HashLink>
          </li>
        )}
        {showNavbar && (
          <li className="nav__ul__li">
            <HashLink className="nav__ul__li__a" smooth to="/path#contact">
              Kontakt meg
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
