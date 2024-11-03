import StaffComponent from "../StaffComponent/StaffComponents";
import React from "react";
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
      <div className="team__staff">
        <StaffComponent />
      </div>
    </section>
  );
}
