import photo from "../media/placeholder-picture.png";

export default function Introduction() {
  return (
    <header className="introduction">
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
