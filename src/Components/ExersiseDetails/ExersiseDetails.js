import React from "react";
import './ExersiseDetails.css'

const ExersiseDetails = ({cart,breakTime}) => {
  let totalTime = 0;
  for(const item of cart){
    totalTime = totalTime + parseFloat(item.time);
  }
  return (
    <section>
      <h4>Exersise Details</h4>
      <div className="exersise">
        <p>Exersise Time</p>
        <p><strong>{totalTime}hr</strong></p>
      </div>
      <div className="break">
        <p>Break Time</p>
        <p>{breakTime} sec</p>
      </div>
    </section>
  );
};

export default ExersiseDetails;
