import React from 'react'

const HeaderLink = (props) => {
  if (props.children) {
    return (
      <div className={props.className} style={props.style}>
        {props.text}
          {props.children}
      </div>
    )
  }
  return (
    <a className={props.className} style={props.style}>
      {props.text}
    </a>
  )
}

export default HeaderLink
