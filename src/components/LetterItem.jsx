import React from 'react'


const LetterItem = (props) => {
    return (
      <div className={`letter-item ${props.iconPos}`}>
        <div className={`letter-item-content-wrapper ${props.iconPos}`} style={{flexDirection: props.reversed ? 'row-reverse' : 'row'}}>
          <div className={`letter-text ${props.iconPos}`}>
            <h1 className={`letter-item-title ${props.iconPos}`}>{props.title}</h1>
            <h4 className={`letter-item-intro ${props.iconPos}`}>{props.intro}</h4>
            <button className={`letter-item-button ${props.iconPos}`}>Read More</button>
          </div>
          <div className={`letter-item-boss-man ${props.iconPos}`} style={{backgroundImage: `url(${props.imageUrl})`}} />
          <div className={`letter-item-barrick-icon ${props.iconPos}`} />
        </div>
      </div>
    )
}

export default LetterItem
