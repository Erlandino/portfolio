import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="introduction__nav">
      <ul className="introduction__nav__ul">
        <li className="introduction__nav__ul__li">
          <Link to="/#">Hjem</Link>
        </li>
        <li className="introduction__nav__ul__li">
          <Link to=".AboutMe">Om meg</Link>
        </li>
        <li className="introduction__nav__ul__li">
          <button href="">Projekter</button>
        </li>
        <li className="introduction__nav__ul__li">
          <button href="">Kontakt meg</button>
        </li>
        <li className="introduction__nav__ul__li">icon</li>
      </ul>
    </nav>
  );
}
