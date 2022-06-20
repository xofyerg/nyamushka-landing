import { useEffect, useState } from "react";
import { cards } from "./helpers/data";
import { getRandomIntInclusive } from "./helpers/getRandom";
import DisabledCard from "./components/DisabledCard";
import CardContainer from "./components/CardContainer";

const App = () => {
  const [randomNum, setRandomNum] = useState(null);

  useEffect(() => {
    const num = getRandomIntInclusive(1, 3);
    setRandomNum(num);
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="title">Ты сегодня покормил кота?</h1>

        <div className="cards">
          {cards.map((card) => {
            if (randomNum !== null && randomNum === card.id) {
              return <DisabledCard card={card} key={card.id} />;
            }

            return <CardContainer card={card} key={card.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
