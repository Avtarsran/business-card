import { useEffect, useState } from 'react'
import './App.css'
import CardDisplay from './components/CardDisplay'
import CreateCard from './components/CreateCard'

function App() {
  const [cards, setCards] = useState([])

  useEffect(()=>{
    try {
      fetch("http://localhost:3000/cards")
      .then(res => res.json()
      .then(data => setCards(data.cards)))
      
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <div>
      <CreateCard cards={cards} setCards={setCards}></CreateCard>
      <CardDisplay cards={cards}></CardDisplay>
    </div>
  )
}

export default App
