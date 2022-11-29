import Gallery from "./Gallery";

// flywing images imports
import flywingImageOne from "../../media/flywing/flywing-frontPage.png";
import flywingImageTwo from "../../media/flywing/flywing-imageGallery.png";
import flywingImageThree from "../../media/flywing/flywing-planeDelayChart.png";

// solar quiz images imports
import solarQuizImageOne from "../../media/solar-quiz/solar-quiz-registration.png";
import solarQuizImageTwo from "../../media/solar-quiz/solar-quiz-registration.png";
import solarQuizImageThree from "../../media/solar-quiz/solar-quiz-registration.png";

import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      projectName: "Flywing",
      imageOne: flywingImageOne,
      imageTwo: flywingImageTwo,
      imageThree: flywingImageThree,
      github: "https://github.com/Erlandino/portofolio",
      figma: "",
    },

    {
      projectName: "solar Quiz",
      imageOne: solarQuizImageOne,
      imageTwo: solarQuizImageTwo,
      imageThree: solarQuizImageThree,
      github: "https://github.com/Erlandino/autmn-project",
      figma: "",
    },
  ];

  const [imageSet, setImageSet] = useState(projects[0]);

  console.log(imageSet);

  // console.log(imageSet.flywing && "yup");
  // console.log(imageSet.solarQuiz && "yup");
  // setImageSet((prevImageSet) => {
  //   if (prevImageSet.flywing) {
  //   }
  // });

  const { imageOne, imageTwo, imageThree, github, figma, projectName } = imageSet;
  return (
    <section className="projects" id="projects">
      <Gallery projectName={projectName} firstImage={imageOne} secondImage={imageTwo} thirdImage={imageThree} githubLink={github} figmaLink={figma} />
    </section>
  );
}
