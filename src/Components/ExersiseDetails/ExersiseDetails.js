import React from "react";
import './ExersiseDetails.css'

const ExersiseDetails = ({cart}) => {
  return (
    <section>
      <h4>Exersise Details</h4>
      <h5>Selected: {cart.length}</h5>
      <div className="exersise">
        <p>Exersise Time</p>
        <p>{}</p>
      </div>
      <div className="break">
        <p>Break Time</p>
        <p>200 seconds</p>
      </div>
    </section>
  );
};

export default ExersiseDetails;
