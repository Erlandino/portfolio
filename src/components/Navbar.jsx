// Imports
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

// Navbar component
export default function Navbar() {
  // UseStates
  const [showNavbar, setShowNavbar] = useState(false);
  const [ifHover, setIfHover] = useState(false);

  // Checks if window width is more than 600px and changes ifHover state to the opposite value if it is
  // Runs for navbar on hover
  function onHover() {
    if (window.innerWidth > 600) {
      setIfHover((prevState) => !prevState);
    }
  }

  // UseEffect function, content will only be run once during first load
  useEffect(() => {
    // Checks if the window width is less than 600 px and collapses the navbar if true
    window.innerWidth <= 600 && setShowNavbar(false);

    // Checks if the window width is less than 600 px every time the window is resized and collapses the navbar if true
    window.addEventListener("resize", () => {
      window.innerWidth <= 600 && setShowNavbar(false);
    });
    // Cleanup
    return () =>
      window.removeEventListener("resize", () => {
        window.innerWidth <= 600 && setShowNavbar(false);
      });
  }, []);
  return (
    // Nav container
    <nav className="nav">
      {/* Navigation list */}
      <ul className="nav__ul">
        {/* Only displays content if showNavbar is true */}
        {showNavbar && (
          // List item
          <li className="nav__ul__li">
            {/* Link to home section */}
            <HashLink className="nav__ul__li__a" smooth to="/path#introduction">
              Hjem
            </HashLink>
          </li>
        )}
        {/* Only displays content if showNavbar is true */}
        {showNavbar && (
          // List item
          <li className="nav__ul__li">
            {/* Link to abut me section */}
            <HashLink className="nav__ul__li__a" smooth to="/path#aboutMe">
              Om meg
            </HashLink>
          </li>
        )}
        {/* Only displays content if showNavbar is true */}
        {showNavbar && (
          // List item
          <li className="nav__ul__li">
            {/* Link to projects section */}
            <HashLink className="nav__ul__li__a" smooth to="/path#projects">
              Prosjekter
            </HashLink>
          </li>
        )}
        {/* Only displays content if showNavbar is true */}
        {showNavbar && (
          // List item
          <li className="nav__ul__li">
            {/* Link to contact section */}
            <HashLink className="nav__ul__li__a" smooth to="/path#contact">
              Kontakt meg
            </HashLink>
          </li>
        )}
        {/* List item */}
        <li
          // Two different hover attributes to create a hover effect
          onMouseOver={onHover}
          onMouseLeave={onHover}
          className="nav__ul__li nav__ul__li--menuBackground"
          // Inline css to change background color and border radius of hamburger menu with hover
          style={{
            borderRadius: `${!showNavbar ? "0 0 0 30px" : ""}`,
            backgroundColor: `${ifHover || showNavbar ? "#3a4856" : "white"}`,
          }}
          // sets showNavbar to opposite value after clicked, opening/closing the navbar
          onClick={() => setShowNavbar((prevState) => !prevState)}
        >
          {/* Svg icon of hamburger menu */}
          <svg
            onMouseOver={onHover}
            onMouseLeave={onHover}
            width="42"
            height="43"
            viewBox="0 0 42 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Hamburger navbar menu"
            className="nav__ul__li__menu"
          >
            <path
              d="M7.21875 32.6562H34.7812M7.21875 22.1562H34.7812M7.21875 11.6562H34.7812"
              stroke={ifHover || showNavbar ? "white" : "black"}
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}
