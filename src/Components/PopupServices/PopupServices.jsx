/* eslint-disable jsx-a11y/anchor-is-valid */
import ListPopupService from "../ListPopupService/ListPopupService";
import { listPopupServiceText } from "../../utils/arrays";
import CloseIcon from "../../images/close-white.png";
import React from "react";
import "./PopupServices.css";

export default function PopupServices({
  active,
  setActive,
}) {
  return (
    <dialog
      id="popupServices"
      className={
        active
          ? "popup__services active"
          : "popup__services"
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? "popup__services_content active"
            : "popup__services_content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={CloseIcon}
          alt="Закрыть"
          className="popup__services_close-icon"
          onClick={() => setActive(false)}
        />
        <ul className="popup__list">
          {listPopupServiceText.map((item) => (
            <ListPopupService
              key={item.title}
              {...item}
            />
          ))}
        </ul>
      </div>
    </dialog>
  );
}
