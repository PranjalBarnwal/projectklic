import React from 'react'
import Nav from './Nav'
import HomeContent from './HomeContent'
import "./Home.css"
const Home = () => {
  return (
    <div className='home-container'>
      {/* <div className='nav-sticky'> */}
      <Nav/>
      {/* </div> */}
      <HomeContent/>
    </div>
  )
}

export default Home
