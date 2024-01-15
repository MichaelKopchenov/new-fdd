import CloseIcon from "../../images/close.png";
import "./Popup.css";

export default function Popup({
  active,
  setActive,
  avatar,
}) {
  return (
    <div
      id="popup"
      className={active ? "active" : ""}
    >
      <div>
        <img
          src="Ntcn"
          alt="Ntcn"
        />
        <h3>Ntdn</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Sed nam molestiae
          saepe itaque culpa error. Ratione ipsum
          quibusdam et neque sint perferendis?
          Soluta quis similique repellendus,
          dolorem amet reiciendis debitis.
        </p>
      </div>
      <button className="header__popup_close">
        <img
          src={CloseIcon}
          alt="Закрыть"
          className="header__popup_close-icon"
          onClick={() => setActive(false)}
        />
      </button>
    </div>
  );
}
