import ListPriceService from "../ListPriceService/ListPriceService";
import { listPriceServiceText } from "../../utils/arrays";
import React from "react";
import "./Price.css";

export default function Price() {
  return (
    <section
      id="Price"
      className="price"
    >
      <div className="price__content">
        <div
          data-aos="flip-right"
          className="price__content_block"
        >
          <h2 className="price__content_block_title">
            Наши услуги
          </h2>
        </div>
      </div>
      <ul className="price__list">
        {listPriceServiceText.map((item) => (
          <ListPriceService
            key={item.title}
            {...item}
          />
        ))}
      </ul>
    </section>
  );
}
