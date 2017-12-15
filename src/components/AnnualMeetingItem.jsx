import React from 'react'

const AnnualMeetingItem = (props) => {
  return (
    <div className="annual-meeting-item">
      <div className="annual-meeting-item-when">
        <span>When</span>
        <p>{props.when}</p>
      </div>
      <div className="annual-meeting-item-where">
        <span>Where</span>
        <p>{props.where}</p>
      </div>
    </div>
  )
}

export default AnnualMeetingItem
