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
        img= {item.coverImg}
        rating= {item.stats.rating}
        reviewCount= {item.stats.reviewCount}
        location= {item.location}
        title= {item.title}
        price= {item.price} />
  )
  })
  return (
    <div className='container'>

      <NavBar />
      <Hero />
      <div className='card-section'>
        {cardEl}
      </div>
    </div>
  )
}

export default App
/**
 * <Card
          img="katie-zaferes.png"
          ratingScore={5.0}
          ratingCount="(6) •"
          location="USA"
          text="Life Lessons with Katie Zaferes"
          cost="From $136"/>
        <Card
          img="wedding-photography 1.png"
          ratingScore={5.0}
          ratingCount="(6) •"
          location="USA"
          text="Learn wedding photography"
          cost="From $125"/>
        <Card
          img="mountain-bike 1.png"
          ratingScore={4.8}
          ratingCount="(2) •"
          location="USA"
          text="Group Mountain Biking"
          cost="From $50"/>
 */
