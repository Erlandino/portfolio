// Imports
import photo from "../media/photo.jpg";
import donwload from "../media/material-symbol-download.svg";
import cv from "../media/cv-erlend.pdf";

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
          <h1 className="introduction__container__text__title">Hei,</h1>
          <br />
          <p className="introduction__container__text__paragraph">
            Mitt navn er <strong>Erlend</strong> og jeg er en junior frontend utvikler
          </p>
          <br />
          <p className="introduction__container__text__paragraph introduction__container__text__paragraph--Undertext">
            Jeg har stor interesse for backend, akkurat nå fordyper jeg meg i MERN-stacken hvor jeg
            i hovedfokus holder på med RESTful api's. Jeg trives også veldig godt med React og
            Javascript.
          </p>
        </div>
        {/* Img element containing a photo of myself */}
        <img className="introduction__container__image" src={photo} alt="Face of myself" />
      </div>

      <a href={cv} download="cv-erlend" className="introduction__cvDownload">
        Last ned CV
        <img src={donwload} alt="download icon" className="introduction__cvDownload__img" />
      </a>
    </header>
  );
}
