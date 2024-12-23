import ListComponentStandarts from "../ListComponentStandarts/ListComponentStandarts";
import {
  listComponentStandartText,
  standartsBackground,
} from "../../utils/arrays";
import React from "react";
import "./Standarts.css";

export default function Standarts() {
  return (
    <section className="standarts">
      <div className="standarts__content">
        <div
          data-aos="flip-right"
          className="standarts__content_block"
        >
          <h2 className="standarts__content_block_title">
            Почему выбирают нас?
          </h2>
          <p className="standarts__content_block_description">
            Мы предоставляем широкий спектр услуг
            по созданию и поддержке сайтов,
            включая разработку дизайна,
            программирование, SEO-оптимизацию и
            поддержку пользователей. Высокие
            стандарты разработки сайта
            предполагают качество,
            производительность, безопасность,
            SEO-оптимизацию, адаптивность и
            поддержку обновлений.
          </p>
        </div>
        <img
          src={standartsBackground}
          alt="Обложка"
          className="standarts__content_block_image"
          data-aos="flip-left"
        />
      </div>
      <ul className="standarts__list">
        {listComponentStandartText.map((item) => (
          <ListComponentStandarts
            key={item.title}
            {...item}
          />
        ))}
      </ul>
    </section>
  );
}
