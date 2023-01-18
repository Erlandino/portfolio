// Imports
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

// Figma icon import
import figmaIon from "../../media/figma-logo.svg";

import { useState } from "react";

// Projects component
export default function Projects() {
  // Array with projects in groups
  const projects = [
    {
      projectName: "Flywing",
      imageOne: flywingImageOne,
      imageTwo: flywingImageTwo,
      imageThree: flywingImageThree,
      github: "https://github.com/Erlandino/portofolio",
      figma: "",
      description:
        "A css/html project with a little bit of javascript in it. Main focus was to practice html and css. website is made to be responsive for mobile phones",
    },
    {
      projectName: "Streaming site",
      imageOne: StreamingSiteImageOne,
      imageTwo: StreamingSiteImageTwo,
      imageThree: StreamingSiteImageThree,
      github: "",
      figma:
        "https://www.figma.com/file/EG0HAnVadfGMGMQDkvoX8y/Design-quiz-site?node-id=40%3A4&t=iBoCdhVxGMewcCKF-1",
      description:
        "This was a project made only in figma. In this project the goal was to showcase the different tools available in figma and that i could use them. The website is intended to be a combination of a video game streaming platform like twitch and movie show streaming sites like netflix.",
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
        "In this project i was working together with others in a group. We shared a figma folder to design together and github to share and validate each others code. In this project i learned how to use git and github",
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
          <button
            className={`projects__container__navigation__button ${
              projectName === "Flywing" && "projects__container__navigation__button-active"
            }`}
            onClick={() => imageGalleryProjectSelect(0)}
          >
            Flywing side
          </button>
          {/* Button for streaming site */}
          <button
            className={`projects__container__navigation__button ${
              projectName === "Streaming site" && "projects__container__navigation__button-active"
            }`}
            onClick={() => imageGalleryProjectSelect(1)}
          >
            Streaming side
          </button>
          {/* Button for quiz site */}
          <button
            className={`projects__container__navigation__button ${
              projectName === "Solar Quiz" && "projects__container__navigation__button-active"
            }`}
            onClick={() => imageGalleryProjectSelect(2)}
          >
            Quiz side
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
