import React from 'react';
import './Portfolio.css';

const Portfolio =()=> {


    const projects = [
        {
            id: 0,
            tittle: "MyFood",
            iamge: "imgs/myfood.png",
            link: "https://github.com/Cojocari-Ion/MyFood"
        },

        {
            id: 1,
            tittle: "Blueline",
            iamge: "imgs/blueline.png",
            link: "https://github.com/Cojocari-Ion/BlueLine"
        },

        {
            id: 2,
            tittle: "MEDfamily",
            iamge: "imgs/medfamily.png",
            link: "https://github.com/Cojocari-Ion/MedFamily"
        },

        {
            id: 3,
            tittle: "Tours App",
            iamge: "imgs/tours.png",
            link: "https://github.com/Cojocari-Ion/tours-react-"
        },

        {
            id: 4,
            tittle: "Recipes App",
            iamge: "imgs/recipes.png",
            link: "https://github.com/Cojocari-Ion/recipe-app-react-/tree/main/my-app"
        },

        {
            id: 5,
            tittle: "Breacking Bad App",
            iamge: "imgs/breacking-bad.png",
            link: "https://github.com/Cojocari-Ion/breacking-bad-react"
        },

        {
            id: 6,
            tittle: "My CV App",
            iamge: "imgs/myCV.png",
            link: "https://github.com/Cojocari-Ion/my-react-experience/tree/main/experience-app"
        },
    ]

    return (
        <div className="portfolio page">
            {projects.map((project) => (
                <a  target="_blank" className="project" key={project.id} href={project.link}>

                    <div className="img-container">
                        <img src={project.iamge} alt={project.tittle} />
                    </div>

                    <span className="tittle">{project.tittle}</span>

                </a>
            ))}
        </div>
    )
}

export default Portfolio