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
    },
    {
      id: 2,
      nome: "Masters",
    },
    {
      id: 3,
      nome: "Pacific",
    },
    {
      id: 4,
      nome: "Americas",
    },
    {
      id: 5,
      nome: "Emea",
    },
    {
      id: 6,
      nome: "China",
    },
  ]

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
  )
}

export default App
