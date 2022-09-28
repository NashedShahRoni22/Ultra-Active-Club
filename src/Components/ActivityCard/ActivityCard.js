import React from 'react';
import logo from '../../img/code-logo.png';
import './ActivityCard.css'

const ActivityCard = () => {
    return (
        <section>
            <nav>
                <div className="nav-img">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-tag">
                    <p>Coding Activity</p> 
                </div>
            </nav>
            <h2>Select Your Coding Topics Today:</h2>
        </section>
    );
};

export default ActivityCard;