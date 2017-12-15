import React from 'react'


const StatItem = (props) => {
  return (
    <div className="stat-item">
      <div className="stat-title">
        <h4>{props.title}</h4>
        <span className="stat-title-icon"></span>
      </div>
      <div className="stat-subtitle">
        <span className="stat-subtitle main"></span>
        <span className="stat-subtitle secondary"></span>
      </div>
      <div className="stat-chart">
        <span className="stat-chart-title"></span>
        <div className="stat-chart"></div>
        <span className="stat-chart-subtitle main"></span>
        <span className="stat-chart-subtitle secondary"></span>
      </div>
    </div>
  )
}

export default StatItem
