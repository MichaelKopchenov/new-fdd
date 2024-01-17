/* eslint-disable jsx-a11y/anchor-is-valid */
import PopupServices from "../PopupServices/PopupServices";
import { useState, useEffect } from "react";
import Popup from "../Popup/Popup";
import "./Header.css";

export default function Header() {
  const [modalActive, setModalActive] =
    useState(false);

  const [width, setWidth] = useState(
    window.innerWidth
  );
  useEffect(() => {
    const handleResizeWindow = () =>
      setWidth(window.innerWidth);

    window.addEventListener(
      "resize",
      handleResizeWindow
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResizeWindow
      );
    };
  }, []);

  if (width <= 769) {
    return (
      <>
        <header
          className="header__burger"
          id="Header"
          onClick={() => setModalActive(true)}
        />
        <Popup
          active={modalActive}
          setActive={setModalActive}
        />
      </>
    );
  } else {
    return (
      <header
        className="header"
        id="Header"
      >
        <PopupServices
          active={modalActive}
          setActive={setModalActive}
        />
        <ul className="header__ul">
          <li className="header__li">
            <a
              href="#Team"
              className="header__li-link"
            >
              Наша команда
            </a>
          </li>
          <li className="header__li">
            <a
              href="#Works"
              className="header__li-link"
            >
              Наши проекты
            </a>
          </li>
          <li className="header__li">
            <a
              onClick={() => setModalActive(true)}
              className="header__li-link"
            >
              Услуги
            </a>
          </li>
          <li className="header__li">
            <a
              href="#Footer"
              className="header__li-link"
            >
              Контакты
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
