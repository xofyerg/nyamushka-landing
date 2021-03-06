import objectImg from "../assets/object.png";

const Card = ({ card: { title, subtitle, desc, weight }, setSelect }) => {
  const onSelectHandler = () => {
    setSelect(true);
  };

  const bottomText = (
    <>
      Чего сидишь? Порадуй котэ,{" "}
      <span onClick={onSelectHandler} className="card__link">
        купи
      </span>
      <span style={{ color: "#1698d9" }}>.</span>
    </>
  );

  return (
    <div className="card">
      <div className="card-item" onClick={onSelectHandler}>
        <img className="card-item__image" src={objectImg} alt="object-img" />

        <div className="card-item__body">
          <div className="card-item__top">{title}</div>
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

        <div className="card-circle">
          <div className="card-circle__body">
            <h1 className="card-circle__weight">{weight}</h1>
            <p className="card-circle__unit">кг</p>
          </div>
        </div>
      </div>
      <p className="card__bottom">{bottomText}</p>
    </div>
  );
};

export default Card;
