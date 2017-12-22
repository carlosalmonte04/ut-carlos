import React from 'react'
import statsImg from '../assets/2x-stats.png'
import Waypoint from 'react-waypoint'

const StatsSection = (props) => {
  return (
    <section className="stats">
      <div className="stats-data" style={{backgroundImage: `url('${statsImg}')`}} />
      <Waypoint onEnter={props.animateLearnMoreItems} />
    </section>
  )
}

export default StatsSection
