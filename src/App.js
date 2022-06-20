import { useEffect, useState } from "react";
import Card from "./components/Card";
import { cards } from "./helpers/data";
import { getRandomIntInclusive } from "./helpers/getRandom";

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
            }

            return <Card card={card} key={card.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
