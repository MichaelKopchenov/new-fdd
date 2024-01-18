import "./ListComponentLink.css";
import React from "react";

export default function ListComponentLink({
  way,
  target,
  text,
}) {
  return (
    <>
      <li className="list-component-link">
        <a
          href={way}
          target={target}
          className="list-component-link__text"
        >
          {text}
        </a>
      </li>
    </>
  );
}
