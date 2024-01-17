import "./StaffComponents.css";

export default function StaffComponent({
  image,
  name,
  post,
}) {
  return (
    <div className="staff-component">
      <img
        src={image}
        alt={name}
        className="staff-component__image"
        data-aos="zoom-out"
      />
      <h2 className="staff__title">{name}</h2>
      <p className="staff__post">{post}</p>
    </div>
  );
}
