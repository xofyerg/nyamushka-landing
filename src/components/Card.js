import { useState } from "react";
import objectImg from "../assets/object.png";

const Card = ({ card: { subtitle, desc, weight, selected, disabled } }) => {
  const [isSelect, setSelect] = useState(false);

  const cardText = (
    <>
      Чего сидишь? Порадуй котэ,{" "}
      <span onClick={() => setSelect(!isSelect)} className="card__link">
        купи
      </span>
      <span style={{ color: "#1698d9" }}>.</span>
    </>
  );

  const disabledText = <p className="card__disable-text">{disabled}</p>;

  return (
    <div className="card">
      <div
        className={isSelect ? "card-item-selected" : "card-item"}
        onClick={() => setSelect(!isSelect)}
      >
        <img className="card-item__image" src={objectImg} alt="object-img" />

        <div className="card-item__body">
          <p className="card-item__top">Сказочное заморское яство</p>
          <h1 className="card-item__title">Нямушка</h1>
          <h2 className="card-item__subtitle">{subtitle}</h2>

          <p className="card-item__desc">
            <span className="card-item__number">{desc.portion}</span> порций
          </p>
          <p className="card-item__desc">
            <span>{desc.present.number}</span> {desc.present.text}
          </p>
          {desc.order && <p className="card-item__desc">{desc.order}</p>}
        </div>

        <div
          className={
            isSelect ? "card-circle card-circle-selected" : "card-circle"
          }
        >
          <div className="card-circle__body">
            <h1 className="card-circle__weight">{weight}</h1>
            <p className="card-circle__unit">кг</p>
          </div>
        </div>
      </div>
      <p className="card__text">{isSelect ? selected : cardText}</p>
    </div>
  );
};

export default Card;
