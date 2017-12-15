import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { debounce } from 'underscore'
import Home from './pages/Home'
import { fadeInUp, fadeIn } from './helpers/animators'
import * as HeroImage from './assets/2xhero-image.jpg'
import './App.css'

class App extends Component {

  state = {
    DOMMounted: false,
    learnMoreAnimated: false,
    lettersAnimated: false,
    headerClass: ''
  }

  componentDidMount() {
    const heroDomImg = new Image()
    heroDomImg.src = HeroImage
    heroDomImg.onload = this.fadeInWelcome // wait for hero image to load before showing page
  }

  handleAnimateHeader = (waypoint) => { // debounce header animation for added smoothness
    debounce(this.animateHeader.bind(this, waypoint), 300, true)()
  }

  animateHeader = (waypoint) => {
    if (waypoint.currentPosition === 'above' && this.state.headerClass === '') {
      this.setState({ headerClass: 'shrink' })
    }
    else if (this.state.headerClass !== '') {
      this.setState({ headerClass: '' })
    }
  }

  animateLearnMoreItems = () => {
    if (!this.state.learnMoreAnimated) {
      fadeInUp('learn-more-item', 1.5, 0.2)
      this.setState({ learnMoreAnimated: true })
    }
  }

  animateLetters = () => {
    if (!this.state.lettersAnimated) {
      fadeIn('letter-item-boss-man', 1, 0.1)
      this.setState({ lettersAnimated: true })
    }
  }

  fadeInWelcome = () => {
    fadeInUp('hero-post-header::after', 1, 0.1) // animate line under 'welcome' @ hero
    fadeInUp(
      'header-link',
      1,
      0.1,
      this.setState({
        headerClass: window.pageYOffset > 570 ? 'shrink' : '',
        DOMMounted: true
      })
    )
  }

  render() {
    return (
      <div className={`App ${this.state.DOMMounted ? 'start' : ''}`}>
        <Route
          path="/"
          render={() => (
            <Home
              animateLearnMoreItems={this.animateLearnMoreItems}
              animateLetters={this.animateLetters}
              animateHeader={this.handleAnimateHeader}
              headerClass={this.state.headerClass}
            />
          )}
        />
      </div>
    )
  }
}

export default App
