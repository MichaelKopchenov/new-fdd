/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import PopupServices from "../PopupServices/PopupServices";
import "./Footer.css";

export default function Footer() {
  const [modalActive, setModalActive] =
    useState(false);

  return (
    <footer
      id="Footer"
      className="footer"
    >
      <PopupServices
        active={modalActive}
        setActive={setModalActive}
      />
      <div className="footer__content">
        <div className="footer__block">
          <h2 className="footer__title">
            Контактная информация
          </h2>
          <ul className="footer__list">
            <li className="footer__link">
              <a
                href="mailto: fdd-info@yandex.ru"
                target="_blanc"
                className="footer__text"
              >
                fdd-info@yandex.ru
              </a>
            </li>
            <li className="footer__link">
              <a
                href="tel:+74993227668"
                className="footer__text"
              >
                +7(499)322-76-68
              </a>
            </li>
            <li className="footer__link">
              <p className="footer__text">
                Москва, пр-т Вернадского 82
              </p>
            </li>
          </ul>
        </div>
        <div className="footer__block">
          <h2 className="footer__title">
            Основные ссылки
          </h2>
          <ul className="footer__list">
            <li className="footer__link">
              <a
                href="#"
                className="footer__text"
              >
                Главная
              </a>
            </li>
            <li className="footer__link">
              <a
                href="#Works"
                className="footer__text"
              >
                Наши проекты
              </a>
            </li>
            <li className="footer__link">
              <a
                onClick={() =>
                  setModalActive(true)
                }
                className="footer__text"
              >
                Наши услуги
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__block">
          <h2 className="footer__title">
            Социальные сети
          </h2>
          <ul className="footer__list">
            <li className="footer__link">
              <a
                href="https://t.me/FastDigitalDecisions"
                target="_blanc"
                className="footer__text"
              >
                Telegram
              </a>
            </li>
            <li className="footer__link">
              <a
                href="https://vk.com"
                target="_blanc"
                className="footer__text"
              >
                VK
              </a>
            </li>
            <li className="footer__link">
              <a
                href="https://github.com/MichaelKopchenov"
                target="_blanc"
                className="footer__text"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copy">
        ©2023. Копченов Михаил Викторович
      </p>
    </footer>
  );
}
