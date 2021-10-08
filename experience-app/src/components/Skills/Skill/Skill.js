import React from 'react';
import './Skill.css'

const Skill =(props)=> {

    const style = {
        width: `${props.level}cm`, 
      };

    return (
        <div className="skill">
            <div className="icon-container">
                <i className={props.icon}></i>
            </div>

            <h4 className="tittle">{props.tittle}</h4>

            <div className="level-bar">
                <div style={style} className="level"></div>
            </div>
        </div>
    )
}

export default Skill
