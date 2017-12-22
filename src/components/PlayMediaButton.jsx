import React from 'react'

const PlayMediaButton = (props) => {
  return (
    <div className="play-container" style={{ width: props.size, height: props.size }}>
      <div
        className="play-triangle"
        style={{ borderWidth: props.hero ? '14px 0 14px 21px' : '11px 0 11px 18px' }}/>
    </div>
  )
}

export default PlayMediaButton
