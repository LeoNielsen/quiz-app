import React from 'react'
import logo from '../img/whitelogo.png'
import ".././styles/Header.css"

const Header = () => {
  return (
    <header className='header'>
      <div className='flex-container'>
        <div className='flex-item'>
        <img src={logo}/>
        </div>
      </div>
    </header>
  )
}

export default Header