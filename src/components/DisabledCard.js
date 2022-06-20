import objectImg from "../assets/object.png";

const DisabledCard = ({ card: { title, subtitle, desc, weight, bottom } }) => {
  return (
    <div className="card">
      <div className="card-item-d">
        <img
          className="card-item__image opacity"
          src={objectImg}
          alt="object-img"
        />

        <div className="card-item__body">
          <div className="card-item__top opacity">{title}</div>
          <h1 className="card-item__title opacity">Нямушка</h1>
          <h2 className="card-item__subtitle opacity">{subtitle}</h2>

          <p className="card-item__desc opacity">
            <span className="card-item__number">{desc.portion}</span> порций
          </p>
          <p className="card-item__desc opacity">
            <span className="card-item__number">{desc.present.number}</span>{" "}
            {desc.present.text}
          </p>
          {desc.order && (
            <p className="card-item__desc opacity">{desc.order}</p>
          )}
        </div>

        <div className="card-circle card-circle-d">
          <div className="card-circle__body">
            <h1 className="card-circle__weight">{weight}</h1>
            <p className="card-circle__unit">кг</p>
          </div>
        </div>
      </div>
      <p className="card__bottom card__bottom-d">{bottom.disabled}</p>
    </div>
  );
};

export default DisabledCard;
