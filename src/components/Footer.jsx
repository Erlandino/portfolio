// Githhub icon import
import githubIcon from "../media/GitHub-Mark-32px.png";

// Figma icon
import figmaIon from "../media/figma-logo.svg";

// Footer component
export default function Footer() {
  return (
    // Footer container
    <footer className="footer">
      {/* List */}
      <ul className="footer__list">
        {/* List item */}
        <li className="footer__list__item">
          {/* Link to github portofolio code */}
          <a
            className="footer__list__item__link"
            href="https://github.com/Erlandino/portofolio"
            target="_blanc"
          >
            {/* Image of github logo */}
            <img className="footer__list__item__link__img" src={githubIcon} alt="" /> Portofolio
            github repository
          </a>
        </li>

        {/* Linebreak */}
        <hr />

        {/* List item */}
        <li className="footer__list__item">
          {/* Link to portofolio figma design */}
          <a
            className="footer__list__item__link"
            href="https://www.figma.com/file/YhaPF5PWom0Pw1hk31XmLI/Portofolio?node-id=182%3A648&t=EoRGebW6oiSHkeQe-1"
            target="_blanc"
          >
            {/* Image of figma icon */}
            <img className="footer__list__item__link__img" src={figmaIon} alt="" /> Portofolio
            design folder
          </a>
        </li>
      </ul>
    </footer>
  );
}
