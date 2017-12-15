import React from 'react'
import Header from '../containers/Header'
import HeroSection from '../containers/HeroSection'
import LearnMoreSection from '../containers/LearnMoreSection'
import StatsSection from '../containers/StatsSection'
import LettersSection from '../containers/LettersSection'
import AdditionalInfoSection from '../containers/AdditionalInfoSection'
import VotingItemsSection from '../containers/VotingItemsSection'
import AnnualMeetingSection from '../containers/AnnualMeetingSection'
import Footer from '../containers/Footer'

const Home = (props) => {
  return (
    <div className="Home">
      <Header headerClass={props.headerClass} />
      <HeroSection animateHeader={props.animateHeader} />
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

export default Home
