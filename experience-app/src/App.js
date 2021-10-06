import React, {useState} from 'react';
import './App.css';
import sections from './data.js';
//components
import Personal from './components/Personal/Personal';
import Portfolio from './components/Portfolio/Portfolio';
import Jobs from './components/Jobs/Jobs';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Studies from './components/Studies/Studies';


function App() {

  const [value, setValue] = useState(0)

  return (
    <div className="App">

      <nav>
        <div className="img-container">
            <img src="" alt="" />
        </div>

        <div className="btn-container">    
            {sections.map((item) => (
              <button onClick type="button">{item.tittle}</button>
            ))}
        </div>
      </nav>

      <section>
        {sections[value].content}
      </section>
    </div>
  );
}

export default App;
