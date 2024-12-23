/* eslint-disable jsx-a11y/anchor-is-valid */
import ListComponentLink from "../ListComponentLink/ListComponentLink";
import {
  listLinksArrayTwo,
  listLinksArrayOne,
  listLinksArrayThree,
} from "../../utils/arrays";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="footer"
    >
      <div className="footer__content">
        <nav className="footer__block">
          <h2 className="footer__title">
            Контактная информация
          </h2>
          <ul className="footer__list">
            {listLinksArrayOne.map((link) => (
              <ListComponentLink
                key={link.way}
                {...link}
              />
            ))}
          </ul>
        </nav>
        <nav className="footer__block">
          <h2 className="footer__title">
            Основные ссылки
          </h2>
          <ul className="footer__list">
            {listLinksArrayTwo.map((link) => (
              <ListComponentLink
                key={link.way}
                {...link}
              />
            ))}
            <li className="footer__link">
              <a
                href="#Price"
                className="footer__text"
              >
                Наши услуги
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__block">
          <h2 className="footer__title">
            Социальные сети
          </h2>
          <ul className="footer__list">
            {listLinksArrayThree.map((link) => (
              <ListComponentLink
                key={link.way}
                {...link}
              />
            ))}
          </ul>
        </nav>
      </div>
      <p className="footer__copy">
        ©2024. Копченов Михаил Викторович
      </p>
    </footer>
  );
}
