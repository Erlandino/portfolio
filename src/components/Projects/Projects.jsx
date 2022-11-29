import Gallery from "./Gallery";
import flywingImageOne from "../../media/flywing/flywing-frontPage.png";
import flywingImageTwo from "../../media/flywing/flywing-imageGallery.png";
import flywingImageThree from "../../media/flywing/flywing-planeDelayChart.png";

import { useState } from "react";

export default function Projects() {
  const flywing = {
    projectName: "Flywing",
    imageOne: flywingImageOne,
    imageTwo: flywingImageTwo,
    imageThree: flywingImageThree,
    github: "https://github.com/Erlandino/portofolio",
    figma: "",
  };

  const [imageSet, setImageSet] = useState({ flywing });

  const { imageOne, imageTwo, imageThree, github, figma, projectName } = imageSet.flywing;
  return (
    <section className="projects" id="projects">
      <Gallery projectName={projectName} firstImage={imageOne} secondImage={imageTwo} thirdImage={imageThree} githubLink={github} figmaLink={figma} />
    </section>
  );
}
