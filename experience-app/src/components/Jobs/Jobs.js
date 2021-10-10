import React from 'react';
import './Jobs.css';

const Jobs =()=> {

    const jobs = [
        {
            id: 0,
            class: "job-container nikba",
            tittle: "Nikba Creative Studio",
            logo: "data:image/png;base64,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",
            period: "07.2020-09.2020"
        },

        {
            id: 1,
            class: "job-container pro-succes",
            tittle: "Conservatorio di Musica Agostino Steffani",
            logo: "https://mamaplus.md/sites/default/files/styles/1200_x_628/public/carte_de_vizita/2020-06/logo_2.jpg?itok=RXEm_kes",
            period: "09.2020-present"
        },
    ]

    return (
        <div className="page jobs">
            {jobs.map((item) => (
                <div key={item.id} id={item.id} className={item.class}>
                    <div className="img-container">
                        <img src={item.logo} alt="img" />
                    </div>
                
                    <div className="institute-info">
                        <h3 className="tittle">
                            {item.tittle}
                        </h3>
                        <span className="period">{item.period}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Jobs