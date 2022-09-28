import React from 'react';
import img from '../../img/info-img.jpg'
import './PersonalInfo.css'

const PersonalInfo = () => {
    return (
        <div className='info-card'>
            <div className="info-img">
                <img src={img} alt="" />
            </div>
            <div className="info-address">
                <h4>Nashed Shah Roni</h4>
                <p>Dhaka, Bangladesh</p>
            </div>
            
        </div>
    );
};

export default PersonalInfo;