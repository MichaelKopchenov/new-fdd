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
            <h2 className="price__title">
                Наши услуги
            </h2>
            <ul className="price__list">
                {listPriceServiceText.map((item) => (
                    <ListPriceService
                    key={item.title}
                    {...item}
                    />
                ))}
            </ul>
        </section>
    )
}