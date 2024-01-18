import "./ListComponentStandarts.css";
import React from "react";

export default function ListComponentStandarts({
  title,
  description,
}) {
  return (
    <li
      data-aos="flip-up"
      className="list-component-standarts"
    >
      <div className="list-component-standarts__block">
        <div className="list-component-standarts__image" />
        <h3 className="list-component-standarts__title">
          {title}
        </h3>
      </div>
      <p className="list-component-standarts__description">
        {description}
      </p>
    </li>
  );
}
