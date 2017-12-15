import React from 'react'
import AnnualMeetingItem from '../components/AnnualMeetingItem'

const VotingDetailsSection = (props) => {
  return (
    <section className="annual-meeting">
      <div className="annual-meeting-content-wrapper">
        <h1 className="annual-meeting-title">Annual Meeting Details</h1>
        <div className="annual-meeting-items-container">
          <AnnualMeetingItem
            when="Tuesday, April 13th, 2018 9:30 AM PDT"
            where="Hotel Name Goes Here 99 Union Street Los Angeles, CA 98101"
          />
        </div>
      </div>
    </section>
  )
}

export default VotingDetailsSection