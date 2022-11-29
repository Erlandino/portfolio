import ImageGallery from "react-image-gallery";

export default function Gallery(props) {
  const { projectName, firstImage, secondImage, thirdImage, githubLink, figmaLink } = props;

  const images = [
    {
      original: firstImage,
      thumbnail: firstImage,
    },
    {
      original: secondImage,
      thumbnail: secondImage,
    },
    {
      original: thirdImage,
      thumbnail: thirdImage,
    },
  ];
  return (
    <div className="projects__container">
      <h1 className="projects__container__title">Projekter</h1>
      <div className="projects__container__navigation">
        <button className={`projects__container__navigation__button ${projectName === "Flywing" && "projects__container__navigation__button-active"}`}>Travel website</button>
        <button className={`projects__container__navigation__button ${projectName === "StreamingSite" && "projects__container__navigation__button-active"}`}>Streaming site design</button>
        <button className={`projects__container__navigation__button ${projectName === "QuizSite" && "projects__container__navigation__button-active"}`}>Quiz site</button>
      </div>
      <div className="projects__container__carouselContainer">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}
