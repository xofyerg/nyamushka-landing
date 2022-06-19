import Card from "./components/Card";
import { cards } from "./data";

const App = () => {
  return (
    <div className="container">
      <div>
        <h1 className="title">Ты сегодня покормил кота?</h1>

        <div className="cards">
          {cards.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
