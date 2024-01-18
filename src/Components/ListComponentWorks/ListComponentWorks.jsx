import "./ListComponentWorks.css";
import React from "react";

export default function ListComponentWorks({
  title,
  description,
  image,
}) {
  return (
    <li
      data-aos="zoom-in"
      className="list-component-works"
    >
      <div className="list-component-works__content">
        <img
          src={image}
          alt="Site"
          className="list-component-works__image"
        />
      </div>
      <div className="list-component-works__block">
        <h3 className="list-component-works__title">
          {title}
        </h3>
        <p className="list-component-works__description">
          {description}
        </p>
      </div>
    </li>
  );
}
