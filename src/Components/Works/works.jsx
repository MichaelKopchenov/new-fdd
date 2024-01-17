import ListComponentWorks from "../ListComponentWorks/ListComponentWorks";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {
  buttonComponentText,
  listComponentWorksText,
} from "../../utils/arrays";
import "./Works.css";

export default function Works() {
  return (
    <section
      id="Works"
      className="works"
    >
      <div className="works__block">
        <h2 className="works__title">
          Наши работы, на которых мы
          специализируемся
        </h2>
        <ButtonComponent
          {...buttonComponentText[1]}
        />
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
