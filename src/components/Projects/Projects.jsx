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
import githubIcon from "../../media/GitHub-Mark-32px.png";

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
      projectName: "Solar Quiz",
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

  const { imageOne, imageTwo, imageThree, github, figma, projectName } = projects[imageSet];
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h1 className="projects__container__title">Prosjekter</h1>
        <div className="projects__container__navigation">
          <button className={`projects__container__navigation__button ${projectName === "Flywing" && "projects__container__navigation__button-active"}`} onClick={() => imageGalleryProjectSelect(0)}>
            Flywing side
          </button>
          <button
            className={`projects__container__navigation__button ${projectName === "Streaming site" && "projects__container__navigation__button-active"}`}
            onClick={() => imageGalleryProjectSelect(1)}
          >
            Streaming side design
          </button>
          <button
            className={`projects__container__navigation__button ${projectName === "Solar Quiz" && "projects__container__navigation__button-active"}`}
            onClick={() => imageGalleryProjectSelect(2)}
          >
            Quiz side
          </button>
        </div>
        <Gallery firstImage={imageOne} secondImage={imageTwo} thirdImage={imageThree} />
        <ul className="projects__container__links">
          {github && (
            <li className="projects__container__links__container">
              <a href={github} target="_blank" rel="noreferrer" className="projects__container__links__container__link">
                <img src={githubIcon} alt="" className="projects__container__links__container__link__image" />
                <p className="projects__container__links__container__direction">{projectName} github repository</p>
              </a>
            </li>
          )}
          {figma && (
            <li className="projects__container__links__container">
              <a href={figma} target="_blank" rel="noreferrer" className="projects__container__links__container__link">
                <img src={figmaIon} alt="" className="projects__container__links__container__link__image" />
                <p className="projects__container__links__container__direction">{projectName} figma mappe</p>
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
