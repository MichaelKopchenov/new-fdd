/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.css";

export default function Header() {
  return (
    <header
      className="header"
      id="Header"
    >
      <ul className="header__ul">
        <li className="header__li">
          <a
            href="#Team"
            className="header__li-link"
            active="staff"
          >
            Наша команда
          </a>
        </li>
        <li className="header__li">
          <a
            href="#Works"
            className="header__li-link"
            active="works"
          >
            Наши проекты
          </a>
        </li>
        <li className="header__li">
          <a
            href="#"
            className="header__li-link"
            active="works"
          >
            Услуги
          </a>
        </li>
        <li className="header__li">
          <a
            href="#Footer"
            className="header__li-link"
            active="works"
          >
            Контакты
          </a>
        </li>
      </ul>
    </header>
  );
}
