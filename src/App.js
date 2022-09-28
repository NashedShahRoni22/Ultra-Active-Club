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

  const addBreakTime =()=>{
    console.log('clicked');
  }

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
            <div className="time-btn" onClick={addBreakTime}>20s</div>
            <div className="time-btn" onClick={addBreakTime}>10s</div>
            <div className="time-btn" onClick={addBreakTime}>30s</div>
            <div className="time-btn" onClick={addBreakTime}>40s</div>
            <div className="time-btn" onClick={addBreakTime}>50s</div>
          </div>
        </div>
        <PhysicalInfo></PhysicalInfo>
        <ExersiseDetails cart={cart}></ExersiseDetails>
      </div>


    </section>
  );
}

export default App;
