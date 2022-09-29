import React from 'react';
import './BreakTime.css'

const BreakTime = ({addBreakTime}) => {
    return (
        <section>
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
      </section>
    );
};

export default BreakTime;