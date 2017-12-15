import React from 'react'
import CheckMark from './CheckMark'

const VotingItem = (props) => {
  return (
    <div className="voting-item">
      <CheckMark className="checkmark"/>
      <h1 className="voting-item-title">{props.title}</h1>
      <p className="voting-item-text">{props.text}</p>
      <button className="voting-item-button">Read More</button>
    </div>
  )
}

export default VotingItem
