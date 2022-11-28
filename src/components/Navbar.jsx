import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__ul__li">
          <HashLink className="nav__ul__li__a" smooth to="/path#introduction">
            Home
          </HashLink>
        </li>
        <li className="nav__ul__li">
          <HashLink className="nav__ul__li__a" smooth to="/path#aboutMe">
            About me
          </HashLink>
        </li>
        <li className="nav__ul__li">
          <HashLink className="nav__ul__li__a" smooth to="/path#projects">
            Projects
          </HashLink>
        </li>
        <li className="nav__ul__li">
          <HashLink className="nav__ul__li__a" smooth to="/path#contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
