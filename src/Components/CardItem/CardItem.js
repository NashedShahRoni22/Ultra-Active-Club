import React from 'react';
import './CardItem.css'

const CardItem = ({card,addBtn}) => {
    const {name, picture, time, description} = card;
    
    return (
        <div className='card-item'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <h5>Required Time: {time}hr</h5>
            <button className='add-btn' onClick={()=>addBtn(card)}>
                Add to list
            </button>
        </div>
    );
};

export default CardItem;