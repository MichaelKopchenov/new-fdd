import "./ButtonComponent.css";
import React from "react";

export default function ButtonComponent({
  title,
  hrefTo,
}) {
  return (
    <>
      <a
        href={hrefTo}
        className="button-component__block-button"
      >
        <p className="button-component__block-button_text">
          {title}
        </p>
      </a>
    </>
  );
}
