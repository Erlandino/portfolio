// Imports
import photo from "../media/photo.JPG";

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
          {/* Title */}
          <h1 className="introduction__container__text__title">Hei</h1>
          {/* Paragraph */}
          <p className="introduction__container__text__paragraph">
            mitt navn er <strong>Erlend</strong> og jeg er en front-end utvikler
          </p>
        </div>
        {/* Img element containing a photo of myself */}
        <img className="introduction__container__image" src={photo} alt="Face" />
      </div>
    </header>
  );
}
