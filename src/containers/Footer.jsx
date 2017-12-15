import React from 'react'
import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Logo className="logo-footer" />
        <SearchBar />
      </div>
    </footer>
  )
}

export default FooterSection