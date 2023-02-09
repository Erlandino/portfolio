// Imports
import photo from "../media/photo.jpg";

// Introduction component
// Front page content
export default function Introduction() {
  return (
    // Header to mark the section
    <header className="introduction" id="introduction">
      {/* Introduction container */}
      <div className="introduction__container">
        {/* Introduction text container */}
        <div className="introduction__container__text">
          {/* Introduction text */}
          <h1 className="introduction__container__text__title">Hei</h1>
          <p className="introduction__container__text__paragraph">
            mitt navn er <strong>Erlend</strong> og jeg er en frontend utvikler
          </p>
          <p className="introduction__container__text__paragraph introduction__container__text__paragraph--Undertext">
            Har stor interesse for å utforske mer mot backend
          </p>
        </div>
        {/* Img element containing a photo of myself */}
        <img className="introduction__container__image" src={photo} alt="Face of myself" />
      </div>
    </header>
  );
}
