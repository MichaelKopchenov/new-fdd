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
      className="list-price-service"
    >
      <div className="list-price-service__block">
        <div className="list-price-service__image" />
        <h3 className="list-price-service__title">
          {title}
        </h3>
      </div>
      <p className="list-price-service__description">
        {description_one}
      </p>
      <p className="list-price-service__description">
        {description_two}
      </p>
      <p className="list-price-service__description">
        {description_three}
      </p>
    </li>
  );
}
