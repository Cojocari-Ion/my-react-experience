import React from 'react';
import './Studies.css';

const Studies =()=> {

    const studies = [
        {
            id: 0,
            class: "std-container bachelor",
            tittle: "Academia de Muzică, Teatru și Arte Plastice",
            logo: "https://amtap.md/assets/app/img/logo.png",
            period: "2016-2020"
        },

        {
            id: 1,
            class: "std-container student-exchage",
            tittle: "Conservatorio di Musica Agostino Steffani",
            logo: "https://www.conscfv.it/wp-content/uploads/2017/11/logo-bianco.png",
            period: "03.2019-06.2019"
        },

        {
            id: 2,
            class: "std-container web-design",
            tittle: "Link Academy (Web Design)",
            logo: "https://www.link-academy.com/images/logo.png",
            period: "11.2020-present"
        }, 
        
        {
            id: 3,
            class: "std-container english",
            tittle: "Fantastic English (Upper Intermediate)",
            logo: "https://fantastic-english.md/wp-content/uploads/2021/06/Logo-White-Homepage-desktop-e1607166771985_result.webp",
            period: "06.2018-08.2018"
        }, 
    ]

    return (
        <div className="page studies">
            {studies.map((item) => (
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

export default Studies