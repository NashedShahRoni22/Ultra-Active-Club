import { useEffect, useState } from "react";
import "./App.css";
import ActivityCard from "./Components/ActivityCard/ActivityCard";
import CardItem from "./Components/CardItem/CardItem";
import ExersiseDetails from "./Components/ExersiseDetails/ExersiseDetails";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import PhysicalInfo from "./Components/PhysicalInfo/PhysicalInfo";

function App() {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const addBtn = (card) => {
    const newCart = [...cart, card];
    setCart(newCart);
  };

  const addBreakTime = (breaktime) => {
    setBreakTime(breaktime);
  };

  return (
    <section className="activity-main">
      <div className="activity-card">
        <ActivityCard></ActivityCard>
        <div className="cards-item">
          {cards.map((card) => (
            <CardItem key={card.id} card={card} addBtn={addBtn}></CardItem>
          ))}
        </div>
      </div>

      <div className="activity-calc">

        <PersonalInfo></PersonalInfo>
        <div>
          <h4>Add a break</h4>
          <div className="btn-holder">
            <button className="time-btn" onClick={() => addBreakTime(10)}>
              10s
            </button>
            <button className="time-btn" onClick={() => addBreakTime(20)}>
              20s
            </button>
            <button className="time-btn" onClick={() => addBreakTime(30)}>
              30s
            </button>
            <button className="time-btn" onClick={() => addBreakTime(40)}>
              40s
            </button>
            <button className="time-btn" onClick={() => addBreakTime(50)}>
              50s
            </button>
            <button className="time-btn" onClick={() => addBreakTime(60)}>
              60s
            </button>
          </div>
        </div>
        <PhysicalInfo></PhysicalInfo>
        <ExersiseDetails cart={cart} breakTime={breakTime}></ExersiseDetails>
      </div>
    </section>
  );
}

export default App;
