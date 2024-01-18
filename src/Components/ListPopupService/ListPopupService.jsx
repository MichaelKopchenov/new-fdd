import "./ListPopupService.css";
import React from "react";

export default function ListPopupService({
  title,
  description_one,
  description_two,
  description_three,
}) {
  return (
    <li className="list-popup-service">
      <div className="list-popup-service__block">
        <div className="list-popup-service__image" />
        <h3 className="list-popup-service__title">
          {title}
        </h3>
      </div>
      <h4 className="list-popup-service__description">
        {description_one}
      </h4>
      <p className="list-popup-service__description">
        {description_two}
      </p>
      <p className="list-popup-service__description">
        {description_three}
      </p>
    </li>
  );
}
