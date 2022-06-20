import { useState } from "react";
import objectImg from "../assets/object.png";

const SelectedCard = ({
  card: { subtitle, desc, weight, bottom },
  setSelect,
}) => {
  const [topText, setTopText] = useState(false);
  const [] = useState(false);

  const onSelectHandler = () => {
    setSelect(false);
    setTopText(false);
  };

  const topTextElement = topText ? (
    <div className="card-item__top card-item__top-s">Котэ не доволен?</div>
  ) : (
    <div className="card-item__top">Сказочное заморское яство</div>
  );

  return (
    <div className="card">
      <div
        className="card-item-s"
        onClick={onSelectHandler}
        onMouseOver={() => setTopText(true)}
        onMouseOut={() => setTopText(false)}
      >
        <img className="card-item__image" src={objectImg} alt="object-img" />

        <div className="card-item__body">
          {topTextElement}
          <h1 className="card-item__title">Нямушка</h1>
          <h2 className="card-item__subtitle">{subtitle}</h2>

          <p className="card-item__desc">
            <span className="card-item__number">{desc.portion}</span> порций
          </p>
          <p className="card-item__desc">
            <span className="card-item__number">{desc.present.number}</span>{" "}
            {desc.present.text}
          </p>
          {desc.order && <p className="card-item__desc">{desc.order}</p>}
        </div>

        <div className="card-circle card-circle-s">
          <div className="card-circle__body">
            <h1 className="card-circle__weight">{weight}</h1>
            <p className="card-circle__unit">кг</p>
          </div>
        </div>
      </div>
      <p className="card__bottom">{bottom.selected}</p>
    </div>
  );
};

export default SelectedCard;
