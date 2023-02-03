// Imports
import ImageGallery from "react-image-gallery";
import { useRef, useEffect } from "react";

// Gallery component
export default function Gallery(props) {
  // Destructuring of props object
  const { firstImage, secondImage, thirdImage, pullData } = props;

  const imageRef = useRef(null);

  useEffect(() => {
    const imageDom = imageRef.current.imageGallery.current;
    pullData(imageDom);
  });

  function logo() {
    console.log("slide");
  }
  // Array of all the sets of images
  const images = [
    {
      original: firstImage,
    },
    {
      original: secondImage,
    },
    {
      original: thirdImage,
    },
  ];

  return (
    // Image carousel container
    <div className="projects__container__carouselContainer">
      {/* Image carousel */}
      <ImageGallery onBeforeSlide={logo} items={images} ref={imageRef} />
    </div>
  );
}
