import { buttonComponentText } from "../../utils/arrays";
import { useRef, useEffect } from "react";
import Button from "../Button/Button";
import Header from "../Header/Header";
import React from "react";
import "./Initial.css";

export default function Initial({
  setModalActive,
}) {
  const titleRef = useRef();
  const spanRef = useRef();

  useEffect(() => {
    titleRef.current.style = "border-right: none";
    const timer = setTimeout(() => {
      spanRef.current.style = "display: block";
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="initial">
      <Header />
      <div className="initial__block">
        <h1
          ref={titleRef}
          className="initial__block-h1 initial__text"
        >
          FAST DIGITAL
        </h1>
        <span
          ref={spanRef}
          className="initial__block-span initial__text"
        >
          Decisions
        </span>
        <p className="initial__block-h4">
          Трансформируем ваши идеи в реальность
        </p>
        <Button {...buttonComponentText[0]} />
      </div>
    </section>
  );
}
