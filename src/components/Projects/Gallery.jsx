// Imports
import ImageGallery from "react-image-gallery";

// Gallery component
export default function Gallery(props) {
  // Destructuring of props object
  const { firstImage, secondImage, thirdImage } = props;

  // Array of all the sets of images
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
    // Image carousel container
    <div className="projects__container__carouselContainer">
      {/* Image carousel */}
      <ImageGallery items={images} />
    </div>
  );
}
