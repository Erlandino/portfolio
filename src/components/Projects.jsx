import ImageGallery from "react-image-gallery";
import imageOne from "../media/flywing/flywing-frontPage.png";
import imageTwo from "../media/flywing/flywing-imageGallery.png";
import imageThree from "../media/flywing/flywing-planeDelayChart.png";

const images = [
  {
    original: imageOne,
    thumbnail: imageOne,
  },
  {
    original: imageTwo,
    thumbnail: imageTwo,
  },
  {
    original: imageThree,
    thumbnail: imageThree,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
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
