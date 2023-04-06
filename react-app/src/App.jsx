import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from "./data"
import './App.css'

function App() {
  const cardEl = cardData.map(item => {
    return (
      <Card
        key= {item.id}
        {...item} //Spread syntax:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
       />
  )
  })
  return (
    <div className='container'>

      <NavBar />
      <Hero />
      <section className="cards-list">
        {cardEl}
      </section>
    </div>
  )
}

export default App

