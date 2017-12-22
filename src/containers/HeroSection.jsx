import React from 'react'
import PlayMediaButton from '../components/PlayMediaButton'
import Waypoint from 'react-waypoint'


const HeroSection = (props) => {
  return (
    <section className="hero">
      <div className="hero-content-wrapper">
        <div className="hero-post-container">
          <h4 className="hero-post-header">Welcome</h4>
          <h1 className="hero-post-title">Barrick: Delivering For Shareholders</h1>
          <Waypoint onEnter={props.animateHeader} onLeave={props.animateHeader}>
            <div className="hero-post-play">
              <PlayMediaButton size={75} hero/>
              <span>2018 Proxy</span>
            </div>
          </Waypoint>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
