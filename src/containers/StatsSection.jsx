import React from 'react'
import statsImg from '../assets/2xgraphs-assets-no-header.jpg'
import Waypoint from 'react-waypoint'

const StatsSection = (props) => {
  return (
    <section className="stats">
      <h1>We Executed on All Our 2016 Priorities</h1>
      <div className="stats-data" style={{backgroundImage: `url('${statsImg}')`}} />
      <Waypoint onEnter={props.animateLearnMoreItems} />
    </section>
  )
}

export default StatsSection
