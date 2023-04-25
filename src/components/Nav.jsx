import React from 'react'
import "./Nav.css"
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import fiq2 from "./../assets/fiq2.png"
const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <img src={fiq2} alt=""  />
      </div>
      <div className='nav-elements'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li className='page-dropdown'><a href="#">Pages</a> <span><MdOutlineKeyboardArrowDown/></span>
        {/* <ul className="sublist">
            <li>FAQ</li>
            <li>TEAM</li>
            <li>404 Page</li>
            <li>News</li>
            <li>Single News</li>
        </ul> */}
        </li>
        <li><a href="#">Contact</a></li>
      </div>
      <div className='extra-icons'>
<AiOutlineSearch/>
<RxHamburgerMenu/>
      </div>
    
    </div>
  )
}

export default Nav
