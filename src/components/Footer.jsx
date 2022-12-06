// Githhub icon import
import githubIcon from "../media/GitHub-Mark-32px.png";

// Figma icon
import figmaIon from "../media/figma-logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list__item">
          <a className="footer__list__item__link" href="https://github.com/Erlandino/portofolio" target="_blanc">
            <img className="footer__list__item__link__img" src={githubIcon} alt="" /> Portofolio github repository
          </a>
        </li>
        <hr />
        <li className="footer__list__item">
          <a className="footer__list__item__link" href="https://www.figma.com/file/YhaPF5PWom0Pw1hk31XmLI/Portofolio?node-id=182%3A648&t=EoRGebW6oiSHkeQe-1" target="_blanc">
            <img className="footer__list__item__link__img" src={figmaIon} alt="" /> Portofolio design folder
          </a>
        </li>
      </ul>
    </footer>
  );
}
