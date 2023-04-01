import React, { useEffect, useState } from 'react'
import "./FixedNavbar.scss"
import item from '../../../assets/images/home/Group 193.jpg'
import FixedNavbarMessage from './message/FixedNavbarMessage'
function FixedNavbar() {
  const [showBtn, setShowBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        setShowBtn(true)
      }
      else {
        setShowBtn(false)
      }
    })

  }, [])
  const scrollToTop = () => {
    console.log("click")
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return (
    <>
      <FixedNavbarMessage />
      <div class={showBtn ? "fixed-navbar-active" : "fixed-navbar"} onClick={scrollToTop}>
        <img src={item} alt="Top" />
      </div>
    </>
  )
}
export default FixedNavbar