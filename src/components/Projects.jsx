import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    // thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    // thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    // thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

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
          <ImageGallery items={images} />
        </div>
      </div>
    </section>
  );
}
