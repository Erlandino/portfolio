import Gallery from "./Gallery";

// Flywing images imports
import flywingImageOne from "../../media/flywing/flywing-frontPage.png";
import flywingImageTwo from "../../media/flywing/flywing-imageGallery.png";
import flywingImageThree from "../../media/flywing/flywing-planeDelayChart.png";

// Solar quiz images imports
import solarQuizImageOne from "../../media/solar-quiz/solar-quiz-registration.png";
import solarQuizImageTwo from "../../media/solar-quiz/solar-quiz-result.png";
import solarQuizImageThree from "../../media/solar-quiz/solar-quiz.png";

// Streaming site images imports
import StreamingSiteImageOne from "../../media/newNexus/newNexus-desktop-contact.png";
import StreamingSiteImageTwo from "../../media/newNexus/newNexus-desktop-main-menu.png";
import StreamingSiteImageThree from "../../media/newNexus/newNexus-desktop-main.png";

// Githhub icon import
import githubIcon from "../../media/GitHub-Mark-64px.png";

// Figma icon
import figmaIon from "../../media/figma-logo.svg";

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
      projectName: "Streaming site",
      imageOne: StreamingSiteImageOne,
      imageTwo: StreamingSiteImageTwo,
      imageThree: StreamingSiteImageThree,
      github: "",
      figma: "https://www.figma.com/file/EG0HAnVadfGMGMQDkvoX8y/Design-quiz-site?node-id=40%3A4&t=iBoCdhVxGMewcCKF-1",
    },
    {
      projectName: "solar Quiz",
      imageOne: solarQuizImageOne,
      imageTwo: solarQuizImageTwo,
      imageThree: solarQuizImageThree,
      github: "https://github.com/Erlandino/autmn-project",
      figma: "https://www.figma.com/file/EG0HAnVadfGMGMQDkvoX8y/Design-quiz-site?node-id=40%3A4&t=iBoCdhVxGMewcCKF-1",
    },
  ];

  const [imageSet, setImageSet] = useState(0);

  function imageGalleryProjectSelect(index) {
    setImageSet((prevImageSet) => index);
  }
  console.log(githubIcon);

  const { imageOne, imageTwo, imageThree, github, figma, projectName } = projects[imageSet];
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h1 className="projects__container__title">Projekter</h1>
        <div className="projects__container__navigation">
          <button className={`projects__container__navigation__button ${projectName === "Flywing" && "projects__container__navigation__button-active"}`} onClick={() => imageGalleryProjectSelect(0)}>
            Travel website
          </button>
          <button
            className={`projects__container__navigation__button ${projectName === "Streaming site" && "projects__container__navigation__button-active"}`}
            onClick={() => imageGalleryProjectSelect(1)}
          >
            Streaming site design
          </button>
          <button
            className={`projects__container__navigation__button ${projectName === "solar Quiz" && "projects__container__navigation__button-active"}`}
            onClick={() => imageGalleryProjectSelect(2)}
          >
            Quiz site
          </button>
        </div>
        <Gallery firstImage={imageOne} secondImage={imageTwo} thirdImage={imageThree} />
        <ul>
          {github && (
            <li>
              <a href={github}>
                <img src={githubIcon} alt="" />
                <h2>{projectName} github repository</h2>
              </a>
            </li>
          )}
          {figma && (
            <li>
              <a href={figma}>
                <img src={figmaIon} alt="" />
                <h2>{projectName} figma folder</h2>
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
