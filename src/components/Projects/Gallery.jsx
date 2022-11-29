import ImageGallery from "react-image-gallery";

export default function Gallery(props) {
  const { firstImage, secondImage, thirdImage } = props;

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
    <div className="projects__container__carouselContainer">
      <ImageGallery items={images} />
    </div>
  );
}
