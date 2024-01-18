import "./ListComponent.css";
import React from "react";

export default function ListComponent({
  title,
  description,
}) {
  return (
    <>
      <li className="list-component__item">
        <div
          data-aos="fade-up"
          className="list-component__logo"
        >
          <div className="list-component__logo_image" />
        </div>
        <div
          data-aos="fade-right"
          className="list-component__item_block"
        >
          <h3 className="list-component__item_block_title">
            {title}
          </h3>
          <p className="list-component__item_block_description">
            {description}
          </p>
        </div>
      </li>
    </>
  );
}
