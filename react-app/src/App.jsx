import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Hero />
      <div className='card-section'>
        <Card
          img="../images/katie-zaferes.png"
          ratingScore="5.0"
          ratingCount="(6) •"
          location="USA"
          text="Life Lessons with Katie Zaferes"
          cost="From $136"/>
        <Card
          img="../images/wedding-photography 1.png"
          ratingScore="5.0"
          ratingCount="(6) •"
          location="USA"
          text="Learn wedding photography"
          cost="From $125"/>
        <Card
          img="../images/mountain-bike 1.png"
          ratingScore="4.8"
          ratingCount="(2) •"
          location="USA"
          text="Group Mountain Biking"
          cost="From $50"/>
    </div>
    </div>
  )
}

export default App
