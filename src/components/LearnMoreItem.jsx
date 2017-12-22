import React from 'react'
import PlayMediaButton from './PlayMediaButton'


const LearnMoreItem = (props) => {
  return (
    <div className="learn-more-item" style={{backgroundImage: `url('${props.bgUrl}')`, flex: props.flex}}>
      <div className="learn-more-item-content-wrapper">
        <PlayMediaButton size={60} />
        <h2 className="learn-more-item-title">{props.title}</h2>
        <button className="learn-more-item-button" value="Learn More">Learn More</button>
      </div>
    </div>
  )
}

export default LearnMoreItem
