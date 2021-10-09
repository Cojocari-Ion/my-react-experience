import React from 'react';
import './Profile.css'

const Profile =()=> {

    const profileItems = [
        {
            id: 0,
            tittle: 'about me',
            text: "Despite the fact that I come from an artistic environment, two years ago I've decided to make a change in my live and began to study design. Sooner I've got interested in larning web-design technologies and steb by step I practiced every basic languages, pre-processors(SASS), JS and right now I improve my React skills. My personal way of practicing is by creating my own projects and always preparing for myself new chalenges that could simulate a real experience."
        },

        {
            id: 1,
            tittle: 'qualities',
            text: "My personal qualities are perseverance, a time economy and clean code strategyes and I am always looking for new things to learn just to improve myself as a developer. In my personal projects I use a lot of web-instruments that help me to find solutions and sometimes to write much faster some lines of code."
        },

        {
            id: 2,
            tittle: 'goals',
            text: "My personal desire for next 2-3 years is to become a senior front-end developer and to create my own web apps for musicians as I have musical studies and experience."
        },
    ]

    return (
        <article className="page profile">
            {profileItems.map((item) => (
                <div key={item.id} id={item.tittle} className="profile-item">
                    <div className="chevron-container">
                        <i className="bi bi-chevron-double-right"></i>
                    </div>

                    <div className="info">
                        <h4>{item.tittle}</h4>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </article>
    )
}

export default Profile