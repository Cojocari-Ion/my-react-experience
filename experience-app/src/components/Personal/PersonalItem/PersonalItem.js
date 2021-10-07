import React from 'react';
import './PersonalItem.css';

const PersonalItem =(props)=> {
    return (
        <div className="item">
            <div className="icon-container">
                <i className={props.icon}></i>
            </div>
            <span>{props.text}</span>
        </div>
    )
}

export default PersonalItem
