import React from "react";
export default function Introduction() {
  return (
    <header className="introduction">
      <nav className="introduction__nav">
        <ul className="introduction__nav__ul">
          <li className="introduction__nav__ul__li">
            <button href="">Hjem</button>
          </li>
          <li className="introduction__nav__ul__li">
            <button href="">Om meg</button>
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
          <p className="introduction__container__text__paragraph">mitt navn er Erlend og jeg er en front-end utvikler</p>
        </div>
        <div className="introduction__container__image">image</div>
      </div>
    </header>
  );
}
