/*
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
*/

import React from "react";
import Slider from "react-slick";
import ListComponentWorks from "../ListComponentWorks/ListComponentWorks";
import { listComponentWorksText } from "../../utils/arrays";
import "./Works.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Works() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Включаю режим Center Mode
    centerPadding: "10px", // расстояние между друг другом
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section
      id="Works"
      className="works">
      <div className="works__block">
        <h2 className="works__title">Наши работы</h2>
      </div>
      <Slider {...settings} className="works__list">
        {listComponentWorksText.map((work, index) => (
          <ListComponentWorks
            key={index}
            title={work.title}
            description={work.description}
            image={work.image || "default-image.jpg"} // 
          />
        ))}
      </Slider>
    </section>
  );
}