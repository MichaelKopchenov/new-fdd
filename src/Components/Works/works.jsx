import ListComponentWorks from "../ListComponentWorks/ListComponentWorks";
import { listComponentWorksText } from "../../utils/arrays";
import React from "react";
import "./Works.css";

export default function Works() {
  return (
    <section
      id="Works"
      className="works"
    >
      <div className="works__block">
        <h2 className="works__title">
          Наши работы
        </h2>
      </div>
      <ul className="works__list">
        {listComponentWorksText.map((block) => (
          <ListComponentWorks
            key={block.title}
            {...block}
          />
        ))}
      </ul>
    </section>
  );
}
