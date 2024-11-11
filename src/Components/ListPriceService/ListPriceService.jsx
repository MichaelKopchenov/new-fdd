import "./ListPriceService.css";
import React from "react";

export default function ListPriceService({
  title,
  description_one,
  description_two,
  description_three,
}) {
  return (
    <li
      data-aos="flip-up"
      className="list-component-price"
    >
      <div className="list-component-price__block">
        <div className="list-component-price__image" />
        <h3 className="list-component-price__title">
          {title}
        </h3>
      </div>
      <p className="list-component-price__description">
        {description_one}
      </p>
      <p className="list-component-price__description">
        {description_two}
      </p>
      <p className="list-component-price__description">
        {description_three}
      </p>
    </li>
  );
}
