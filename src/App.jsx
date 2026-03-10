import { useState } from 'react'
import './App.css'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <img src="/Images/vct-masters-santiago-logo.png"/>
      </header>
      <section>
          <img src="/Images/masters-santiago-2.jpg"/>
      </section>
        <Form/>
    </main>
  )
}

export default App
