import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Header from './Components/Header'
import MainSection from './Components/MainSection'
import Theme from './Components/Themes'

function App() {
  
  const themes = [
    {
      id: 1,
      nome: "Champions",
      image: "../Images/VCT_Champions.png"
    },
    {
      id: 2,
      nome: "Masters",
      image: "../Images/VCT_Masters.png"
    },
    {
      id: 3,
      nome: "Pacific",
      image: "../Images/VCT_Pacific.png"
    },
    {
      id: 4,
      nome: "Americas",
      image: "../Images/VCT_Americas.png"
    },
    {
      id: 5,
      nome: "Emea",
      image: "../Images/VCT_EMEA.svg"
    },
    {
      id: 6,
      nome: "China",
      image: "../Images/VCT_CN.svg"
    }
  ];

  const Events = [
    {
    }
  ];

  return (
    <main>
      <Header/>
      <MainSection/>
      <Form themes={themes}/>
      {themes.map((theme) => {
        return (
          <section key={theme.id}>
            <Theme Theme={theme}/>
          </section>
        )
      })}
    </main>
  );
};

export default App;
