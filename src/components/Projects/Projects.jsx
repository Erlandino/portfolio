// Imports
import Gallery from "./Gallery";

// Flywing images imports
import flywingImageOne from "../../media/flywing/flywing-frontPage.png";
import flywingImageTwo from "../../media/flywing/flywing-imageGallery.png";
import flywingImageThree from "../../media/flywing/flywing-planeDelayChart.png";

// Streaming site images imports
import christmasCountdownOne from "../../media/christmas-countdown/jule-nedtelling.png";
import christmasCountdownTwo from "../../media/christmas-countdown/julehilse.png";
import christmasCountdownThree from "../../media/christmas-countdown/julehilser.png";

// Solar quiz images imports
import solarQuizImageOne from "../../media/solar-quiz/solar-quiz-registration.png";
import solarQuizImageTwo from "../../media/solar-quiz/solar-quiz-result.png";
import solarQuizImageThree from "../../media/solar-quiz/solar-quiz.png";

// import solarQuizImageOne from "../../media/christmas-countdown/jule-nedtelling.png";
// import solarQuizImageTwo from "../../media/christmas-countdown/julehilse.png";
// import solarQuizImageThree from "../../media/christmas-countdown/julehilser.png";

// Githhub icon import
import githubIcon from "../../media/GitHub-Mark-32px.png";

// Figma icon import
import figmaIon from "../../media/figma-logo.svg";

import { useState } from "react";

// Projects component
export default function Projects() {
  // Array with projects in groups
  const projects = [
    {
      projectName: "Jule Nedtelling",
      imageOne: christmasCountdownOne,
      imageTwo: christmasCountdownTwo,
      imageThree: christmasCountdownThree,
      github: "https://github.com/Erlandino/Christmas-task",
      figma:
        "https://www.figma.com/file/cPIkeXKbLLojYG7EyJXObd/ChristmasCalender?node-id=2%3A33&t=voO52qHem3ftnr1A-1",
      description:
        "Her har jeg lagget en jule nedtellings klokke og et kommentar felt for jullehilser. Dette projektet ble da laget i react js og designet på figma. Jeg måtte bruke react hooks som useEffect og useState får å lage nedtellings systemet og kommentarfeltet.",
    },
    {
      projectName: "Solar Quiz",
      imageOne: solarQuizImageOne,
      imageTwo: solarQuizImageTwo,
      imageThree: solarQuizImageThree,
      github: "https://github.com/Erlandino/autmn-project",
      figma:
        "https://www.figma.com/file/EG0HAnVadfGMGMQDkvoX8y/Design-quiz-site?node-id=40%3A4&t=iBoCdhVxGMewcCKF-1",
      description:
        "I dette projektet har jeg jobbet sammen med andre i en gruppe. Vi delte en figma projekt mappe hvor vi designet og bestemte wireframe, styleguide og web side design. Vi brukte også github får å validere , samle og sikre koden våres.",
    },
    {
      projectName: "Flywing",
      imageOne: flywingImageOne,
      imageTwo: flywingImageTwo,
      imageThree: flywingImageThree,
      github: "https://github.com/Erlandino/Flywing-website",
      figma: "",
      description:
        "Flywing projektet består mest av css og html men det er også litt javascript i projektet. Siden er laget med fokus på responsive design og får å teste ut css ferdigheter.",
    },
  ];
  // UseState that contains an index of the projects array above
  const [imageSet, setImageSet] = useState(0);

  // sets imageSet to be the number in the index parameter, which will be the number that the function is called with
  function imageGalleryProjectSelect(index) {
    setImageSet((prevImageSet) => index);
  }

  // Destructuring of projects object
  const { imageOne, imageTwo, imageThree, github, figma, projectName, description } =
    projects[imageSet];
  return (
    // Section
    <section className="projects" id="projects">
      {/* Projects container */}
      <div className="projects__container">
        {/* Title */}
        <h1 className="projects__container__title">Prosjekter</h1>
        {/* Projects navigation container */}
        <div className="projects__container__navigation">
          {/* Button for flywing site */}
          {/* Button for streaming site */}
          <button
            className={`projects__container__navigation__button ${
              projectName === "Jule Nedtelling" && "projects__container__navigation__button-active"
            }`}
            onClick={() => imageGalleryProjectSelect(0)}
          >
            Jule Nedtelling
          </button>
          {/* Button for quiz site */}
          <button
            className={`projects__container__navigation__button ${
              projectName === "Solar Quiz" && "projects__container__navigation__button-active"
            }`}
            onClick={() => imageGalleryProjectSelect(1)}
          >
            Quiz side
          </button>
          <button
            className={`projects__container__navigation__button ${
              projectName === "Flywing" && "projects__container__navigation__button-active"
            }`}
            onClick={() => imageGalleryProjectSelect(2)}
          >
            Flywing side
          </button>
        </div>
        {/* Gallery component, images are being sent as props to create a gallery in the component*/}
        <Gallery firstImage={imageOne} secondImage={imageTwo} thirdImage={imageThree} />
        {/* Link list */}
        <ul className="projects__container__links">
          {/* Only shows if there is a github link for the project */}
          {github && (
            // List item
            <li className="projects__container__links__container">
              {/* Link to github repository */}
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="projects__container__links__container__link"
              >
                <img
                  src={githubIcon}
                  alt=""
                  className="projects__container__links__container__link__image"
                />
                {/* Descriptive text */}
                <p className="projects__container__links__container__direction">
                  {projectName} github repository
                </p>
              </a>
            </li>
          )}
          {/* Only shows if there is a figma link for the project */}
          {figma && (
            // List item
            <li className="projects__container__links__container">
              {/* Link to figma file */}
              <a
                href={figma}
                target="_blank"
                rel="noreferrer"
                className="projects__container__links__container__link"
              >
                <img
                  src={figmaIon}
                  alt=""
                  className="projects__container__links__container__link__image"
                />
                {/* Descriptive text */}
                <p className="projects__container__links__container__direction">
                  {projectName} figma mappe
                </p>
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="projects__description">
        <h1 className="projects__description__title">{projectName}</h1>
        <p className="projects__description__paragraph">{description}</p>
      </div>
    </section>
  );
}
