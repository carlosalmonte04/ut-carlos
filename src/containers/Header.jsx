import React, { Component } from 'react'
import Logo from '../components/Logo'
import HeaderLink from '../components/HeaderLink'
import OverlayLink from '../components/OverlayLink'
import Button from '../components/Button'

export default class Header extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.headerClass != this.props.headerClass;
  }

  render() {
    return (
      <header className={`header ${this.props.headerClass}`}>
        <Logo className="header-logo" />
        <div className="header-links-container main">
          <HeaderLink className={`header-link normal ${this.props.headerClass}`} text="Our Board" />
          <HeaderLink className={`header-link normal ${this.props.headerClass}`} text="Our Company" />
          <HeaderLink className={`header-link normal ${this.props.headerClass}`} text="Our Pay" />
          <HeaderLink className={`header-link dropdown-trigger ${this.props.headerClass}`} text="2018 Meeting">
            <div className={`dropdown ${this.props.headerClass}`}>
              <ul>
                <li>
                  <HeaderLink className="header-link normal dropdown-link" text="Electing Directors" />
                </li>
                <li>
                  <HeaderLink className="header-link normal dropdown-link" text="Appointing the Auditor" />
                </li>
                <li>
                  <HeaderLink className="header-link normal dropdown-link" text="Say on Pay Advisory Vote" />
                </li>
              </ul>
            </div>
          </HeaderLink>
        </div>
        <div className="header-right">
          <div className="header-links-container small">
            <HeaderLink className="header-link small" text="Download Proxy" />
            <HeaderLink className="header-link small" text="Annual Report" />
          </div>
          <Button className={`button-primary head ${this.props.headerClass}`} text="Vote Now" />
        </div>
        <input type="checkbox" className={`hamburger-trigger ${this.props.headerClass}`}/>
        <button className={`hamburger hamburger--spring ${this.props.headerClass}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className={`menu-overlay ${this.props.headerClass}`}>
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
      </header>
    )
  }
}