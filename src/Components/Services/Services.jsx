import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ListComponent from "../ListComponent/ListComponent";
import "aos/dist/aos.css";
import {
  listComponentText,
  buttonComponentText,
} from "../../utils/arrays";
import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section
      id="Services"
      className="services"
    >
      <h2
        data-aos="zoom-in"
        className="services__title"
      >
        Мы создаем WEB-приложения для наших
        клиентов
      </h2>
      <p
        data-aos="zoom-in"
        className="services__description"
      >
        Наши уникальные подходы и передовые
        технологии обеспечат ваш бизнес надежным
        фундаментом в цифровом пространстве.
      </p>
      <ul className="services__list">
        {listComponentText.map((item) => (
          <ListComponent
            key={item.title}
            {...item}
          />
        ))}
      </ul>
      <ButtonComponent
        {...buttonComponentText[1]}
      />
    </section>
  );
}
