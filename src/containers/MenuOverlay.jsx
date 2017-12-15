import React from 'react'
import OverlayLink from '../components/OverlayLink'


const MenuOverlay = ({ headerClass }) => {
  return (
    <div className={`menu-overlay ${headerClass}`}>
      <div className="overlay-links-container">
        <OverlayLink className="overlay-link" text="Our Board" />
        <OverlayLink className="overlay-link" text="Our Company" />
        <OverlayLink className="overlay-link" text="Our Pay" style={{alignSelf: 'flex-start'}}/>
        <OverlayLink className="overlay-link-dropdown" text="2018 Meeting">
          <ul>
            <li>
              <OverlayLink className="overlay-link secondary" text="Electing Directors" />
            </li>
            <li>
              <OverlayLink className="overlay-link secondary" text="Appointing the Auditor" />
            </li>
            <li>
              <OverlayLink className="overlay-link secondary" text="Say on Pay Advisory Vote" />
            </li>
          </ul>
        </OverlayLink>
      </div>
    </div>
  )
}

export default MenuOverlay
