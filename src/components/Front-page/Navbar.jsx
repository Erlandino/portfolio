import { HashLink } from "react-router-hash-link";
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
        <li className="nav__ul__li" style={{ borderRadius: `${!showNavbar ? "0 0 0 30px" : ""}` }} onClick={() => setShowNavbar((prevState) => !prevState)}>
          <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Hamburger navbar menu" className="nav__ul__li__menu">
            <path d="M7.21875 32.6562H34.7812M7.21875 22.1562H34.7812M7.21875 11.6562H34.7812" stroke="black" onMouseOver={() => console.log("test")} />
          </svg>
          {/* <img src={hamburgerMenu} alt="Hamburger navbar menu" className="nav__ul__li__menu" /> */}
        </li>
      </ul>
    </nav>
  );
}
