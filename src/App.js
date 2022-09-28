import { useEffect, useState } from "react";
import "./App.css";
import ActivityCard from "./Components/ActivityCard/ActivityCard";
import CardItem from "./Components/CardItem/CardItem";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(()=>{
    fetch('activity.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])
  return (
    <section className="activity-main">
      <div className="activity-card">
        <ActivityCard></ActivityCard>
        <div className="cards-item">
        {
          cards.map(card => <CardItem key={card.id} card={card}></CardItem>)
        }
        </div>
      </div>
      <div className="activity-calc">
        <h1>Activity Calc</h1>
      </div>
    </section>
  );
}

export default App;
