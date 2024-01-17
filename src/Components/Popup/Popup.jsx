/* eslint-disable jsx-a11y/anchor-is-valid */
import PopupServices from "../PopupServices/PopupServices";
import CloseIcon from "../../images/close-white.png";
import { useState } from "react";
import "../Header/Header.css";
import "./Popup.css";

export default function Popup({
  active,
  setActive,
}) {
  const [modalActive, setModalActive] =
    useState(false);

  function Popups() {
    setActive(false);
    setModalActive(true);
  }

  return (
    <>
      <PopupServices
        active={modalActive}
        setActive={setModalActive}
      />
      <div
        id="popup"
        className={
          active ? "popup active" : "popup"
        }
        onClick={() => setActive(false)}
      >
        <div
          className={
            active
              ? "popup__content active"
              : "popup__content"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={CloseIcon}
            alt="Закрыть"
            className="popup__services_close-icon"
            onClick={() => setActive(false)}
          />
          <ul
            className={
              active ? "header__ul active" : ""
            }
          >
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                href="#"
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={() => setActive(false)}
              >
                Главная
              </a>
            </li>
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                href="#Team"
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={() => setActive(false)}
              >
                Наша команда
              </a>
            </li>
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                href="#Works"
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={() => setActive(false)}
              >
                Наши проекты
              </a>
            </li>
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={Popups}
              >
                Услуги
              </a>
            </li>
            <li
              className={
                active ? "header__li active" : ""
              }
            >
              <a
                href="#Footer"
                className={
                  active
                    ? "header__li-link active"
                    : ""
                }
                onClick={() => setActive(false)}
              >
                Контакты
              </a>
            </li>
          </ul>
          <p className="footer__copy">
            ©2024. Копченов Михаил Викторович
          </p>
        </div>
      </div>
    </>
  );
}
