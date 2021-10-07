import React from 'react';
import './Studies.css';

const Studies =()=> {

    const studies = [
        {
            id: 0,
            tittle: "Academia de Muzică, Teatru și Arte Plastice",
            logo: "https://amtap.md/assets/app/img/logo.png",
            period: "2016-2020"
        },

        {
            id: 1,
            tittle: "Conservatorio di Musica Agostino Steffani",
            logo: "https://www.conscfv.it/wp-content/uploads/2017/11/logo-bianco.png",
            period: "03.2019-06.2019"
        },

        {
            id: 2,
            tittle: "Link Academy (Web Design)",
            logo: "https://www.link-academy.com/images/logo.png",
            period: "11.2020-present"
        },        
    ]

    return (
        <div className="page studies">
            {studies.map((item) => (
                <div key={item.id} className="std-container">
                    <div className="img-container">
                        <img src={item.logo} alt="" />
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

export default Studies