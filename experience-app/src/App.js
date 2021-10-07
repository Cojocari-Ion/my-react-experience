import React, {useState} from 'react';
import './App.css';

//components
import Personal from './components/Personal/Personal';
import Portfolio from './components/Portfolio/Portfolio';
import Jobs from './components/Jobs/Jobs';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Studies from './components/Studies/Studies';


function App() {

  const sections = [
    {
        id: 0,
        tittle: 'personal data',
        content: <Personal />
    },

    {
        id: 1,
        tittle: 'studies',
        content: <Studies />
    },

    {
        id: 2,
        tittle: 'skills',
        content: <Skills />
    },

    {
        id: 3,
        tittle: 'profile',
        content: <Profile />
    },

    {
        id: 4,
        tittle: 'jobs',
        content: <Jobs />
    },

    {
        id: 5,
        tittle: 'portfolio',
        content: <Portfolio />
    },
]


  const [value, setValue] = useState(0)

  return (

    <div className="App">

      <div className="identity">
        <div className="img-container">
            <img src="https://mir-s3-cdn-cf.behance.net/user/230/774abf711519271.5f75dac689472.jpg" alt="eu" />
        </div>
        
        <h1 className="name">Ion Cojocari</h1>
      </div>

      <div className="info">
        <nav>

          <div className="btn-container">    
              {sections.map((item) => (
                <button className={item.id === value && 'active-btn'} onClick={(e)=> {e.target.classList.toggle('clicked');setValue(item.id)}} type="button">{item.tittle}</button>
              ))}
          </div>
        </nav>

        <section>
          {sections[value].content}
        </section>
      </div>

    </div>
  );
}

export default App;
