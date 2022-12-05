// Githhub icon import
import githubIcon from "../media/GitHub-Mark-32px.png";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list__item">
          <a className="footer__list__item__link" href="https://github.com/Erlandino/portofolio" target="_blanc">
            <img className="footer__list__item__link__img" src={githubIcon} alt="" /> Portofolio github repository
          </a>
        </li>
      </ul>
    </footer>
  );
}
