// Imports
import ImageGallery from "react-image-gallery";
import { useRef, useEffect } from "react";

// Gallery component
export default function Gallery(props) {
  // Destructuring of props object
  const { firstImage, secondImage, thirdImage, pullData, setIfShowDesc, projects, ifShowDesc } =
    props;

  // useRef hook, gets dom element
  const imageRef = useRef(null);

  useEffect(() => {
    const imageDom = imageRef.current.imageGallery.current;
    pullData(imageDom);
  }, [projects]);

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
      {/* button to hide/display description */}
      <button
        className="projects__showDescription"
        onClick={() => setIfShowDesc((prevState) => !prevState)}
      >
        {ifShowDesc ? "Vis detaljer" : "Skjul detaljer"}
      </button>
      {/* Image carousel */}
      <ImageGallery
        items={images}
        ref={imageRef}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={true}
      />
    </div>
  );
}
