import React from 'react'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-horse1.mp4' autoPlay loop muted />
        <h1>LA RECUA</h1>
        <p>What are you waiting for? Join us!</p>
        <div className='hero-btns'>
            <button className='btn btn--outline btn--large'>GET STARTED</button>
            <button className='btn btn--primary btn--large'>WATCH TRAILER <i className='far fa-play-circle' /></button>
        </div>
      
    </div>
  )
}

export default HeroSection
