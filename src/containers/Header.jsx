import React, { Component } from 'react'
import Logo from '../components/Logo'
import HeaderLink from '../components/HeaderLink'
import MenuOverlay from './MenuOverlay'
import Button from '../components/Button'

export default class Header extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.headerClass !== this.props.headerClass;
  }

  render() {
    const { headerClass } = this.props
    return (
      <header className={`header ${headerClass}`}>
        <Logo className={`header-logo ${headerClass}`} />
        <div className="header-links-container main">
          <HeaderLink className={`header-link normal ${headerClass}`} text="Our Board" />
          <HeaderLink className={`header-link normal ${headerClass}`} text="Our Company" />
          <HeaderLink className={`header-link normal ${headerClass}`} text="Our Pay" />
          <HeaderLink className={`header-link dropdown-trigger ${headerClass}`} text="2018 Meeting">
            <div className={`dropdown ${headerClass}`}>
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
          <Button className={`button-primary head ${headerClass}`} text="Vote Now" />
        </div>
        <input type="checkbox" className={`hamburger-trigger ${headerClass}`}/>
        <button className={`hamburger hamburger--spring ${headerClass}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <MenuOverlay headerClass={headerClass}/>
      </header>
    )
  }
}