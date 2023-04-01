import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import HeaderDetail from '../layouts/headerDetail/HeaderDetail'
import Wrapper from '../user/account/Wrapper/Wrapper'

const Course = () => {
  return (
    <div>
      {/* <HeaderDetail /> */}
      <Header />
        <Wrapper>
            <Routes>
                <Route></Route>
            </Routes>
        </Wrapper>
      <Footer />
    </div>
  )
}

export default Course
