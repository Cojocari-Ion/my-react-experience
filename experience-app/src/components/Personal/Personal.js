import React from 'react';
import PersonalItem from './PersonalItem/PersonalItem';
import './Personal.css'

const Personal =()=> {
    return (
        <div className="personal page">
            <h3 className="row-name">contacts</h3>
            <div className="row contacts">
                <PersonalItem className="email" text="ion.cojocari.97@gmail.com" icon="far fa-envelope"/>
                <PersonalItem className="phone" text="+373 680 40 720" icon="fas fa-mobile-alt"/>
                <PersonalItem className="addres" text="N.Sulac 8 ap.273" icon="fas fa-map-marker-alt"/> 
            </div>

            <h3 className="row-name">portfolios</h3>
            <div className="row portfolios">
                <PersonalItem className="github" icon="fab fa-github" text={<a href="https://github.com/Cojocari-Ion">Github</a>} />
                <PersonalItem className="behance" icon="fab fa-behance" text={<a href="https://github.com/Cojocari-Ion">Behance</a>} />  
            </div>

            <h3 className="row-name">aditional</h3>
            <div className="row aditional">
                <PersonalItem className="driving-license" text=" 'B' category driving licence" icon="fas fa-car"/>
                
            </div>
            
        </div>
    )
}

export default Personal
