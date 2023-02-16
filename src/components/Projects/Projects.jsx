// Imports
import Gallery from "./Gallery";

// Christmas countdown images imports
import julenNedtelling from "../../media/christmas-countdown/jule-nedtelling.png";
import juleHilse from "../../media/christmas-countdown/julehilse.png";
import juleHilser from "../../media/christmas-countdown/julehilser.png";

import julenNedtellingMobile from "../../media/christmas-countdown/jule-nedtelling-mobile.png";
import juleHilseMobile from "../../media/christmas-countdown/julehilse-mobile.png";
import juleHilserMobile from "../../media/christmas-countdown/julehilser-mobile.png";

// Solar quiz images imports
import solarQuizRegistration from "../../media/solar-quiz/solar-quiz-registration.png";
import solarQuiz from "../../media/solar-quiz/solar-quiz.png";
import solarQuizResult from "../../media/solar-quiz/solar-quiz-result.png";

import solarQuizRegistrationMobile from "../../media/solar-quiz/solar-quiz-registration-mobile.png";
import solarQuizMobile from "../../media/solar-quiz/solar-quiz-mobile.png";
import solarQuizResultMobile from "../../media/solar-quiz/solar-quiz-result-mobile.png";

// Rock paper scissors images imports
import rockPaperScissorsFrontPage from "../../media/rock-paper-scissors/front-page.png";
import rockPaperScissorsResultPage from "../../media/rock-paper-scissors/result-page.png";
import rockPaperScissorsRules from "../../media/rock-paper-scissors/rules.png";

import rockPaperScissorsFrontPageMobile from "../../media/rock-paper-scissors/front-page-mobile.png";
import rockPaperScissorsResultPageMobile from "../../media/rock-paper-scissors/result-page-mobile.png";
import rockPaperScissorsRulesMobile from "../../media/rock-paper-scissors/rules-mobile.png";

// Icons import
import githubIcon from "../../media/GitHub-Mark-32px.png";
import figmaIcon from "../../media/figma-logo.svg";
import globeIcon from "../../media/globe.svg";
import arrowLeft from "../../media/arrow-left.svg";
import arrowRight from "../../media/arrow-right.svg";

// hooks
import { useState, useEffect } from "react";

// Projects component
export default function Projects() {
  //contains an index of the projects array
  const [imageSet, setImageSet] = useState(1);
  //contains with of viewport
  const [width, setWidth] = useState(window.innerWidth);
  // decides wether or not to display description
  const [ifShowDesc, setIfShowDesc] = useState(false);
  // useState with array with projects info, pictures and logos in objects
  const [projects, setProjects] = useState([
    {
      projectName: "Jule Nedtelling",
      imageOne: width > 500 ? julenNedtelling : julenNedtellingMobile,
      imageTwo: width > 500 ? juleHilse : juleHilseMobile,
      imageThree: width > 500 ? juleHilser : juleHilserMobile,
      github: "https://github.com/Erlandino/Christmas-task",
      figma:
        "https://www.figma.com/file/cPIkeXKbLLojYG7EyJXObd/ChristmasCalender?node-id=2%3A33&t=voO52qHem3ftnr1A-1",
      webpage: "https://erlandino.github.io/Christmas-task/",
      description:
        "Her har jeg lagget en jule nedtellings klokke og et kommentar felt for jullehilser. Dette projektet ble da laget i react js og designet på figma. Jeg måtte bruke react hooks som useEffect og useState får å lage nedtellings systemet og kommentarfeltet.",
    },
    {
      projectName: "Solar Quiz",
      imageOne: width > 500 ? solarQuizRegistration : solarQuizRegistrationMobile,
      imageTwo: width > 500 ? solarQuiz : solarQuizMobile,
      imageThree: width > 500 ? solarQuizResult : solarQuizResultMobile,
      github: "https://github.com/Erlandino/autmn-project",
      figma:
        "https://www.figma.com/file/EG0HAnVadfGMGMQDkvoX8y/Design-quiz-site?node-id=40%3A4&t=iBoCdhVxGMewcCKF-1",
      description:
        "I dette projektet har jeg jobbet sammen med andre i en gruppe. Vi delte en figma projekt mappe hvor vi designet og bestemte wireframe, styleguide og web side design. Vi brukte også github får å validere , samle og sikre koden våres.",
    },
    {
      projectName: "Rock paper scissors",
      imageOne: width > 500 ? rockPaperScissorsFrontPage : rockPaperScissorsFrontPageMobile,
      imageTwo: width > 500 ? rockPaperScissorsResultPage : rockPaperScissorsResultPageMobile,
      imageThree: width > 500 ? rockPaperScissorsRules : rockPaperScissorsRulesMobile,
      github: "https://github.com/Erlandino/Rock-paper-scissors",
      figma: "",
      webpage: "https://erlandino.github.io/Rock-paper-scissors/",
      description:
        "Alle kjenner sikkert til stein saks papir spillet, her har jeg laget det for en nettside gjennom react. Jeg brukte da design og bilder fra frontendmentor.io for å laget dette spillet. Her måtte jeg også bruke hooks, men hoved utfordring var å gjøre siden responsive og animere elementer",
    },
  ]);

  function sortingProjects(direction) {
    setProjects((prevProjects) => {
      if (direction === "right") {
        return [prevProjects[1], prevProjects[2], prevProjects[0]];
      }
      if (direction === "left") {
        return [prevProjects[2], prevProjects[0], prevProjects[1]];
      }
    });
  }

  // changes image according to the size of viewport width
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

  // Adds class with transition effect to parameter on call
  const pullData = (data) => {
    data.classList.remove("projects__container__carouselContainer__imageChange");
    setTimeout(() =>
      data.classList.add("projects__container__carouselContainer__imageChange", 1000)
    );
  };

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
          {/* Creates a button for each object in array */}
          {projects.map((currentElement, index, arr) => {
            // Template for button to create
            if (index === 0) {
              return (
                <button
                  key={index}
                  className={
                    `projects__container__navigation__button ${
                      currentElement.projectName === projectName &&
                      "projects__container__navigation__button-active"
                    }` /* Sets class of button to active if clicked */
                  }
                  onClick={() => {
                    sortingProjects("left");
                  }}
                >
                  {currentElement.projectName /* Navigation name */}
                </button>
              );
            } else if (index === 1) {
              return (
                <div key={index + 1} className="projects__container__navigation__center">
                  <img
                    key={index + 2}
                    src={arrowLeft}
                    alt="arrow that points to the left"
                    className="projects__container__navigation__arrowContainer__arrow projects__container__navigation__arrowContainer__arrow--left"
                    onClick={() => {
                      sortingProjects("left");
                    }}
                  />

                  <button
                    key={index + 3}
                    className={
                      `projects__container__navigation__button ${
                        currentElement.projectName === projectName &&
                        "projects__container__navigation__button-active"
                      }` /* Sets class of button to active if clicked */
                    }
                    onClick={
                      () =>
                        imageGalleryProjectSelect(
                          index
                        ) /* Calls function with index of current object */
                    }
                  >
                    {currentElement.projectName /* Navigation name */}
                  </button>

                  <img
                    key={index + 4}
                    src={arrowRight}
                    alt="arrow that points to the right"
                    className="projects__container__navigation__arrowContainer__arrow projects__container__navigation__arrowContainer__arrow--right"
                    onClick={() => {
                      sortingProjects("right");
                    }}
                  />
                </div>
              );
            } else {
              return (
                <button
                  key={index + 5}
                  className={
                    `projects__container__navigation__button ${
                      currentElement.projectName === projectName &&
                      "projects__container__navigation__button-active"
                    }` /* Sets class of button to active if clicked */
                  }
                  onClick={() => {
                    sortingProjects("right");
                  }}
                >
                  {currentElement.projectName /* Navigation name */}
                </button>
              );
            }
          })}
        </div>
        {/* Gallery component, images are being sent as props to create a gallery in the component*/}
        <Gallery
          pullData={pullData}
          firstImage={imageOne}
          secondImage={imageTwo}
          thirdImage={imageThree}
          setIfShowDesc={setIfShowDesc}
          projects={projects}
          ifShowDesc={ifShowDesc}
        />
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
      {/* Description for the project currently displaying */}
      <div
        className={`projects__description ${ifShowDesc && "projects__description--active"} ${
          !ifShowDesc && "projects__description--hidden"
        }`}
      >
        <h1 className="projects__description__title">{projectName}</h1>
        <p className="projects__description__paragraph">{description}</p>
      </div>
    </section>
  );
}
