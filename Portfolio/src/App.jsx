import { useState } from 'react';
import './App.css';
import InfiniteScroll from './effect/InfiniteScroll';

const items = [
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="24" height="24" /><br></br>
        <span>Java</span>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="24" height="24" /><br></br>
        <span>Python</span>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" width="24" height="24" /><br></br>
        <span>Bash</span>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width="24" height="24" /><br></br>
        <span>PHP</span>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" width="24" height="24" /><br></br>
        <span>SQL</span>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML/CSS" width="24" height="24" /><br></br>
        <span>HTML/CSS</span>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="24" height="24" /><br></br>
        <span>JavaScript</span>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" width="24" height="24" /><br></br>
        <span>C</span>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg" alt="Réseau" width="24" height="24" /><br></br>
        <span>Réseau</span>
      </div>
    )
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="24" height="24" /><br></br>
        <span>React</span>
      </div>
    )
  },
];

function Presentation() {
return (
      <div className="Presentation">
      <h4>Portfolio</h4>
      <h1>Sami OURRAD</h1>
      <p>Etudiant en BUT Informatique</p>
    </div>
)
}

function Langages() {
  return (
    <div className="t">
      <h3>Qui je suis ?</h3>
      <div className='Description'>
        <p>
          <strong>Étudiant développeur en alternance</strong> <br></br><br></br>

          Je suis actuellement en troisième année de BUT Informatique à l'UPEC de Créteil, 
          sur le site de Vitry-sur-Seine. Cette formation 
          en alternance me permet de combiner l'apprentissage 
          théorique avec une expérience professionnelle concrète dans le développement informatique.
        </p>
        <div className='infini' style={{position: 'relative'}}>
          <InfiniteScroll
            items={items}
            isTilted={false}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={2}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
    <div className='tout'>
      <Presentation />
    </div>
    <div className="Langages">
      <Langages />
    </div>
    <div className='project'>

    </div>
    </div>
  );
}
export default App;