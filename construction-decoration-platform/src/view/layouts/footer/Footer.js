import React from 'react'
import FooterBottom from './footerBottom/FooterBottom'
import FooterTop from './footerTop/FooterTop'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
      <FooterTop/>
      {/* <FooterBottom/> */}
    </div>
  )
}

export default Footer