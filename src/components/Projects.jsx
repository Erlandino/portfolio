export default function Projects() {
  return (
    <section className="projects">
      <div className="projects__container">
        <h1 className="projects__container__title">Projekter</h1>
        <div className="projects__container__navigation">
          <button className="projects__container__navigation__button">Travel website</button>
          <button className="projects__container__navigation__button">Streaming site design</button>
          <button className="projects__container__navigation__button">Quiz site</button>
        </div>
        <div className="projects__container__carouselContainer">
          <button className="projects__container__carouselContainer__button">{"<"}</button>
          <div className="projects__container__carouselContainer__carousel"></div>
          <button className="projects__container__carouselContainer__button">{">"}</button>
        </div>
      </div>
    </section>
  );
}
