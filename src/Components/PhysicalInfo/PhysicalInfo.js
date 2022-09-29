import React from "react";
import './PhysicalInfo.css'

const PhysicalInfo = () => {
  return (
    <section className="info-box">
      <div className="info">
        <h3>60 <small>kg</small></h3>
        <p>
          <small>Weight</small>
        </p>
      </div>
      <div className="info">
        <h3>6.8 <small>inch</small></h3>
        <p>
          <small>Height</small>
        </p>
      </div>
      <div className="info">
        <h3>23 <small>yrs</small></h3>
        <p>
          <small>Age</small>
        </p>
      </div>
    </section>
  );
};

export default PhysicalInfo;
