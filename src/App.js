import { useEffect, useState } from "react";
import "./App.css";
import ActivityCard from "./Components/ActivityCard/ActivityCard";
import BreakTime from "./Components/BreakTime/BreakTime";
import CardItem from "./Components/CardItem/CardItem";
import ExersiseDetails from "./Components/ExersiseDetails/ExersiseDetails";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import PhysicalInfo from "./Components/PhysicalInfo/PhysicalInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure();
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
    localStorage.setItem("break-time", breakTime);
  };

  const notify = () => {
    toast("Basic Notification!");
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
        <BreakTime addBreakTime={addBreakTime}></BreakTime>
        <PhysicalInfo></PhysicalInfo>
        <ExersiseDetails cart={cart} breakTime={breakTime}></ExersiseDetails>
        <button className="toast-btn" onClick={notify}>
          Toast Button
        </button>
        <ToastContainer />
      </div>
    </section>
  );
}

export default App;
