import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import { TweenMax } from 'gsap'
import _ from 'underscore'
import * as HeroImage from './assets/2xhero-image.jpg'
import './App.css';

class App extends Component {

  state = {
    DOMMounted: false,
    learnMoreAnimated: false,
    lettersAnimated: false,
    headerClass: ''
  }

  handleAnimateHeader = (e) => {
    _.debounce(this.animateHeader.bind(this, e), 300, true)()
  }

  animateHeader = (e) => {
    if (e.currentPosition === "above" && this.state.headerClass === "") {
      this.setState({ headerClass: 'shrink' })
    }
    else if(this.state.headerClass != '') {
      this.setState({ headerClass: '' })
    }
  }

  animateLearnMoreItems = (e) => {
    if (!this.state.learnMoreAnimated) {
      this.setState({learnMoreAnimated: true})
      TweenMax.staggerFromTo(
        document.getElementsByClassName('learn-more-item'), 
        1.5, 
        {opacity: 0.2, transform: 'translateY(10px)'}, 
        {opacity: 1, transform: 'translateY(0px)'}, 
        0.2,
      )
    }
  }

  animateLetters = () => {
    if (!this.state.lettersAnimated) {
      this.setState({lettersAnimated: true})
      TweenMax.staggerFromTo(
        document.getElementsByClassName('letter-item-boss-man'), 
        1, 
        {display: 'none'}, 
        {display: 'block'}, 
        0.1
      )
    }
  }

  fadeInWelcome = () => {

    TweenMax.staggerFromTo(
      document.getElementsByClassName('hero-post-header::after'), 
      1, 
      {opacity: 0, transform: 'translateY(10px)'}, 
      {opacity: 1, transform: 'translateY(0px)'}, 
      0.1
    )
    TweenMax.staggerFromTo(
      document.getElementsByClassName('header-link'), 
      1, 
      {opacity: 0, transform: 'translateY(10px)'}, 
      {opacity: 1, transform: 'translateY(0px)'}, 
      0.1,
      this.setState({
        headerClass: window.scrollY > 608 ? 'shrink' : '',
        DOMMounted: true
       })
    )
  }

  componentDidMount() {
    const heroDomImg = new Image()
    heroDomImg.src = HeroImage
    heroDomImg.onload = this.fadeInWelcome
  }

  render() {
    return (
      <div className={`App ${this.state.DOMMounted ? 'start' : ''}`}>
        <Route path="/" render={() => (
          <Home 
            animateLearnMoreItems={this.animateLearnMoreItems} 
            animateLetters={this.animateLetters} 
            animateHeader={this.handleAnimateHeader}
            headerClass={this.state.headerClass}
          />
          )} 
        />
      </div>
    );
  }
}

export default App;
