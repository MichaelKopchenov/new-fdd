import { staffComponentImage } from "../../utils/arrays";
import PopupStaff from "../PopupStaff/PopupStaff";
import { useState } from "react";
import "./StaffComponents.css";
import React from "react";

export default function StaffComponent() {
  const [isModalOpen, setIsModalOpen] =
    useState(null);

  function handleImgClick(e, image) {
    setIsModalOpen(image);
  }

  return (
    <>
      {staffComponentImage.map((image) => (
        <div
          className="staff-component"
          key={image.imgSrc}
        >
          <img
            src={image.imgSrc}
            onClick={(e) =>
              handleImgClick(e, image)
            }
            alt={image.name}
            className="staff-component__image"
            //data-aos="zoom-out"
          />
          <h3 className="staff__title">
            {image.name}
          </h3>
          <p className="staff__post">
            {image.desc}
          </p>
        </div>
      ))}
      {isModalOpen && (
        <PopupStaff
          onClose={() => setIsModalOpen(null)}
          fullname={isModalOpen.fullname}
          imgSrc={isModalOpen.imgSrc}
          birth={isModalOpen.birth}
          about={isModalOpen.about}
          desc={isModalOpen.desc}
          name={isModalOpen.name}
          edu={isModalOpen.edu}
          isOpen={true}
        />
      )}
    </>
  );
}
