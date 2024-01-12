import { staffComponentImage } from "../../utils/arrays";
import StaffComponent from "../StaffComponent/StaffComponents";
import "./Team.css";

export default function Team() {
  return (
    <section
      id="Team"
      className="team"
    >
      <h2 className="team__title">
        Наша команда
      </h2>
      <p className="team__description">
        Роли в проекте, опыте работы и
        образовании. Здесь также могут быть
        размещены фотографии сотрудников и ссылки
        на их профили в социальных сетях.
      </p>
      <div className="team__staff">
        {staffComponentImage.map((img) => (
          <StaffComponent
            key={img.image}
            {...img}
          />
        ))}
      </div>
    </section>
  );
}
