import PopupServices from "../PopupServices/PopupServices";
import { useState } from "react";
import "./ButtonComponent.css";

export default function ButtonComponent({
  title,
  hrefTo,
}) {
  const [modalActive, setModalActive] =
    useState(false);
  return (
    <>
      <a
        href={hrefTo}
        className="button-component__block-button"
        onClick={() => setModalActive(true)}
      >
        <p className="button-component__block-button_text">
          {title}
        </p>
      </a>
      <PopupServices
        active={modalActive}
        setActive={setModalActive}
      />
    </>
  );
}
