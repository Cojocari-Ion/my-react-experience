import React from 'react';
import './Portfolio.css';

const Portfolio =()=> {


    const projects = [
        {
            id: 0,
            tittle: "MyFood",
            iamge: "imgs/myfood.png",
            link: ""
        },

        {
            id: 1,
            tittle: "Blueline",
            iamge: "imgs/blueline.png",
            link: ""
        },

        {
            id: 2,
            tittle: "MEDfamily",
            iamge: "imgs/medfamily.png",
            link: ""
        },

        {
            id: 3,
            tittle: "Tours App",
            iamge: "imgs/tours.png",
            link: ""
        },

        {
            id: 4,
            tittle: "Recipes App",
            iamge: "imgs/recipes.png",
            link: ""
        },

        {
            id: 5,
            tittle: "Breacking Bad App",
            iamge: "imgs/breacking-bad.png",
            link: ""
        },

        {
            id: 6,
            tittle: "My CV App",
            iamge: "imgs/myCV.png",
            link: ""
        },
    ]

    return (
        <div className="portfolio page">
            {projects.map((project) => (
                <a className="project" key={project.id} href={project.link}>

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