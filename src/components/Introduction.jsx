import photo from "../media/placeholder-picture.png";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <header className="introduction">
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
      <div className="introduction__container">
        <div className="introduction__container__text">
          <h1 className="introduction__container__text__title">Hei</h1>
          <p className="introduction__container__text__paragraph">
            mitt navn er <strong>Erlend</strong> og jeg er en front-end utvikler
          </p>
        </div>
        <img className="introduction__container__image" src={photo} alt="Face" />
      </div>
    </header>
  );
}
