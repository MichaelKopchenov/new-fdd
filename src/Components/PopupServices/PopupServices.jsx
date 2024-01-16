/* eslint-disable jsx-a11y/anchor-is-valid */
import "./PopupServices.css";
import { listPopupServiceText } from "../../utils/arrays";
import ListPopupService from "../ListPopupService/ListPopupService";

export default function PopupServices({
  active,
  setActive,
}) {
  return (
    <div
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
        <ul className="popup__list">
          {listPopupServiceText.map((item) => (
            <ListPopupService
              key={item.title}
              {...item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
