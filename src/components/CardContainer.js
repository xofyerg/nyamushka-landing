import { useState } from "react";
import SelectedCard from "./SelectedCard";
import Card from "./Card";

const CardContainer = ({ card }) => {
  const [isSelect, setSelect] = useState(false);

  return isSelect ? (
    <SelectedCard card={card} setSelect={setSelect} />
  ) : (
    <Card card={card} setSelect={setSelect} />
  );
};

export default CardContainer;
