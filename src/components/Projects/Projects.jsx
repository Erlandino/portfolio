// Imports
import Gallery from "./Gallery";

// Flywing images imports
import rockPaperScissorsOneMobile from "../../media/rock-paper-scissors/front-page-mobile.png";
import rockPaperScissorsTwoMobile from "../../media/rock-paper-scissors/result-page-mobile.png";
import rockPaperScissorsThreeMobile from "../../media/rock-paper-scissors/rules-mobile.png";

import rockPaperScissorsOne from "../../media/rock-paper-scissors/front-page.png";
import rockPaperScissorsTwo from "../../media/rock-paper-scissors/result-page.png";
import rockPaperScissorsThree from "../../media/rock-paper-scissors/rules.png";

// Streaming site images imports
import christmasCountdownOneMobile from "../../media/christmas-countdown/jule-nedtelling-mobile.png";
import christmasCountdownTwoMobile from "../../media/christmas-countdown/julehilse-mobile.png";
import christmasCountdownThreeMobile from "../../media/christmas-countdown/julehilser-mobile.png";

import christmasCountdownOne from "../../media/christmas-countdown/jule-nedtelling.png";
import christmasCountdownTwo from "../../media/christmas-countdown/julehilse.png";
import christmasCountdownThree from "../../media/christmas-countdown/julehilser.png";

// Solar quiz images imports
import solarQuizImageOneMobile from "../../media/solar-quiz/solar-quiz-registration-mobile.png";
import solarQuizImageTwoMobile from "../../media/solar-quiz/solar-quiz-result-mobile.png";
import solarQuizImageThreeMobile from "../../media/solar-quiz/solar-quiz-mobile.png";

import solarQuizImageOne from "../../media/solar-quiz/solar-quiz-registration.png";
import solarQuizImageTwo from "../../media/solar-quiz/solar-quiz-result.png";
import solarQuizImageThree from "../../media/solar-quiz/solar-quiz.png";

// Icons import
import githubIcon from "../../media/GitHub-Mark-32px.png";
import figmaIcon from "../../media/figma-logo.svg";
import globeIcon from "../../media/globe.svg";

// hooks
import { useState, useEffect } from "react";

// Projects component
export default function Projects() {
  // state that contains with of viewport
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Sets the viewport width on width resize
    window.addEventListener("resize", () => {
      setWidth((prevState) => window.innerWidth);
    });
    // cleanup
    return () =>
      window.removeEventListener("resize", () => {
        setWidth((prevState) => window.innerWidth);
      });
  }, []);

  // Array with projects info, pictures and logos in objects
  // changes image according to the size of viewport width
  const projects = [
    {
      projectName: "Jule Nedtelling",
      imageOne: width > 500 ? christmasCountdownOne : christmasCountdownOneMobile,
      imageTwo: width > 500 ? christmasCountdownTwo : christmasCountdownTwoMobile,
      imageThree: width > 500 ? christmasCountdownThree : christmasCountdownThreeMobile,
      github: "https://github.com/Erlandino/Christmas-task",
      figma:
        "https://www.figma.com/file/cPIkeXKbLLojYG7EyJXObd/ChristmasCalender?node-id=2%3A33&t=voO52qHem3ftnr1A-1",
      webpage: "https://erlandino.github.io/Christmas-task/",
      description:
        "Her har jeg lagget en jule nedtellings klokke og et kommentar felt for jullehilser. Dette projektet ble da laget i react js og designet på figma. Jeg måtte bruke react hooks som useEffect og useState får å lage nedtellings systemet og kommentarfeltet.",
    },
    {
      projectName: "Solar Quiz",
      imageOne: width > 500 ? solarQuizImageOne : solarQuizImageOneMobile,
      imageTwo: width > 500 ? solarQuizImageTwo : solarQuizImageTwoMobile,
      imageThree: width > 500 ? solarQuizImageThree : solarQuizImageThreeMobile,
      github: "https://github.com/Erlandino/autmn-project",
      figma:
        "https://www.figma.com/file/EG0HAnVadfGMGMQDkvoX8y/Design-quiz-site?node-id=40%3A4&t=iBoCdhVxGMewcCKF-1",
      description:
        "I dette projektet har jeg jobbet sammen med andre i en gruppe. Vi delte en figma projekt mappe hvor vi designet og bestemte wireframe, styleguide og web side design. Vi brukte også github får å validere , samle og sikre koden våres.",
    },
    {
      projectName: "Rock paper scissors",
      imageOne: width > 500 ? rockPaperScissorsOne : rockPaperScissorsOneMobile,
      imageTwo: width > 500 ? rockPaperScissorsTwo : rockPaperScissorsTwoMobile,
      imageThree: width > 500 ? rockPaperScissorsThree : rockPaperScissorsThreeMobile,
      github: "https://github.com/Erlandino/Rock-paper-scissors",
      figma: "",
      webpage: "https://erlandino.github.io/Rock-paper-scissors/",
      description:
        "Alle kjenner sikkert til stein saks papir spillet, her har jeg laget det for en nettside gjennom react. Jeg brukte da design og bilder fra frontendmentor.io for å laget dette spillet. Her måtte jeg også bruke hooks, men hoved utfordring var å gjøre siden responsive og animere elementer",
    },
  ];
  // UseState that contains an index of the projects array above
  const [imageSet, setImageSet] = useState(0);

  // sets imageSet to be the number in the index parameter, which will be the number that the function is called with
  function imageGalleryProjectSelect(index) {
    setImageSet((prevImageSet) => index);
  }

  // Destructuring of projects object
  const { imageOne, imageTwo, imageThree, github, figma, projectName, description, webpage } =
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
          {/* Button for streaming site */}
          <button
            className={`projects__container__navigation__button ${
              projectName === "Jule Nedtelling" && "projects__container__navigation__button-active"
            }`}
            onClick={() => imageGalleryProjectSelect(0)}
          >
            Jule nedtelling
          </button>
          <hr style={{ margin: "20px 0 30px" }} />
          {/* Button for quiz site */}
          <button
            className={`projects__container__navigation__button ${
              projectName === "Solar Quiz" && "projects__container__navigation__button-active"
            }`}
            onClick={() => imageGalleryProjectSelect(1)}
          >
            Quiz side
          </button>
          <hr style={{ margin: "20px 0 30px" }} />

          {/* Button for quiz site Rock paper scissors site*/}
          <button
            className={`projects__container__navigation__button ${
              projectName === "Rock paper scissors" &&
              "projects__container__navigation__button-active"
            }`}
            onClick={() => imageGalleryProjectSelect(2)}
          >
            Stein saks papir
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
                  Github repository
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
                  src={figmaIcon}
                  alt=""
                  className="projects__container__links__container__link__image"
                />
                {/* Descriptive text */}
                <p className="projects__container__links__container__direction">Figma mappe</p>
              </a>
            </li>
          )}
          {webpage && (
            // List item
            <li className="projects__container__links__container">
              {/* Link to figma file */}
              <a
                href={webpage}
                target="_blank"
                rel="noreferrer"
                className="projects__container__links__container__link"
              >
                <img
                  src={globeIcon}
                  alt=""
                  className="projects__container__links__container__link__image"
                />
                {/* Descriptive text */}
                <p className="projects__container__links__container__direction">Nettside</p>
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
