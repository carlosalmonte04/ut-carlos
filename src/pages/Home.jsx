import React from 'react'
import PropTypes from 'prop-types'
import Header from '../containers/Header'
import HeroSection from '../containers/HeroSection'
import LearnMoreSection from '../containers/LearnMoreSection'
import StatsSection from '../containers/StatsSection'
import LettersSection from '../containers/LettersSection'
import AdditionalInfoSection from '../containers/AdditionalInfoSection'
import VotingItemsSection from '../containers/VotingItemsSection'
import AnnualMeetingSection from '../containers/AnnualMeetingSection'
import Footer from '../containers/Footer'
import Waypoint from 'react-waypoint'

const Home = (props) => {
  return (
    <div className="Home">
      <Header headerClass={props.headerClass} />
      <HeroSection animateHeader={props.animateHeader} />
      <Waypoint onEnter={props.animateLearnMoreItems} />
      <LearnMoreSection animateLearnMoreItems={props.animateLearnMoreItems} />
      <StatsSection />
      <LettersSection animateLetters={props.animateLetters} />
      <AdditionalInfoSection />
      <VotingItemsSection />
      <AnnualMeetingSection />
      <Footer />
    </div>
  )
}

const { string, func } = PropTypes

Home.defaultProps = {
  headerClass: ''
}

Home.propTypes = {
  headerClass: string.isRequired,
  animateHeader: func.isRequired,
  animateLearnMoreItems: func.isRequired,
  animateLetters: func.isRequired
}

export default Home
