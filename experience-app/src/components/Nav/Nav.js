import React from 'react';
import './Nav.css';

const Nav =()=> {
    return (
        <nav>
            <div className="img-container">
                <img src="" alt="" />
            </div>

            <div className="btn-container">    
                <button type="button">Personal Info</button>
                
                <button type="button">Studies</button>
                
                <button type="button">Skills</button>
                
                <button type="button">Profile</button>
                
                <button type="button">Tabs</button>
                
                <button type="button">Portfolio</button>
            </div>
        </nav>
    )
}

export default Nav
