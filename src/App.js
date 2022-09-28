import { useEffect, useState } from "react";
import "./App.css";
import ActivityCard from "./Components/ActivityCard/ActivityCard";
import CardItem from "./Components/CardItem/CardItem";
import ExersiseDetails from "./Components/ExersiseDetails/ExersiseDetails";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import PhysicalInfo from "./Components/PhysicalInfo/PhysicalInfo";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);


  const [cart, setCart] = useState([])
  const addBtn = (card) => {
    const newCart = [...cart,card];
    setCart(newCart);
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
        <PhysicalInfo></PhysicalInfo>
        <ExersiseDetails cart={cart}></ExersiseDetails>
      </div>
    </section>
  );
}

export default App;
