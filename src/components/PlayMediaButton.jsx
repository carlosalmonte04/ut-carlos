import React from 'react'

const PlayMediaButton = (props) => {
  return (
    <div className="play-container" style={{width: props.width, height: props.height}}>
      <div className="play-triangle" />
    </div>
  )
}

export default PlayMediaButton
