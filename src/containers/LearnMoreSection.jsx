import React from 'react'
import LearnMoreItem from '../components/LearnMoreItem'
import boardPictureUrl from '../assets/2xour-board.jpg'
import companyPictureUrl from '../assets/2xour-company.jpg'
import payPictureUrl from '../assets/2xour-pay.jpg'

const LearnMoreSection = (props) => {
  return (
    <section className="learn-more">
      <LearnMoreItem bgUrl={boardPictureUrl} flex={0.25} title="Our Board" />
      <LearnMoreItem bgUrl={companyPictureUrl} flex={0.5} title="Our Company" />
      <LearnMoreItem bgUrl={payPictureUrl} flex={0.25} title="Our Pay" />
    </section>
  )
}

export default LearnMoreSection
