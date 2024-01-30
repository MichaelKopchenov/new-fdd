import CloseIcon from "../../images/close-white.png";
import React from "react";
import "./PopupStaff.css";

export default function PopupStaff({
  isOpen,
  onClose,
  imgSrc,
  desc,
  name,
  fullname,
  birth,
  edu,
  about,
}) {
  return (
    <dialog
      id="popupStaff"
      className={
        isOpen
          ? "popup__staff active"
          : "popup__staff"
      }
      onClick={onClose}
    >
      <div
        className={
          isOpen
            ? "popup__staff_content active"
            : "popup__staff_content"
        }
        onClick={onClose}
      >
        <img
          src={CloseIcon}
          alt="Закрыть"
          className="popup__staff_close-icon"
          onClick={onClose}
        />
        <img
          src={imgSrc}
          alt={desc}
          className="popup__staff_image"
        />
        <h2 className="popup__staff_title">
          {name}
        </h2>
        <div className="popup__staff_block">
          <h3 className="popup__staff_subtitle">
            {desc}
          </h3>
          <ul>
            <li className="popup__staff_post">
              {fullname}
            </li>
            <li className="popup__staff_post">
              {birth}
            </li>
            <li className="popup__staff_post">
              {edu}
            </li>
            <li className="popup__staff_post">
              {about}
            </li>
          </ul>
        </div>
      </div>
    </dialog>
  );
}
