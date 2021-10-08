import React from 'react';
import './Skills.css';
import Skill from './Skill/Skill';

const Skills =()=> {
    return (
        <div className="page skills">
            <div className="skills-container web-design">
                <Skill icon="fab fa-html5" tittle="html" level="3"/>
                <Skill icon="fab fa-css3-alt" tittle="css" level="3"/>
                <Skill icon="fab fa-js" tittle="js" level="2"/>
            </div>

            <div className="skills-container frameworks">
                <Skill icon="fab fa-react" tittle="React (redux+hooks)" level="2"/>
                <Skill icon="fab fa-angular" tittle="Angular" level="1"/>
            </div>

            <div className="skills-container adobe-suite">
                <Skill icon="bi bi-file-earmark-pdf" tittle="Adobe Suite (PS&Ai)" level="2"/>
            </div>
            
        </div>
    )
}
export default Skills