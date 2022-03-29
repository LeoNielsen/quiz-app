import React from 'react'
import logo from '../img/logo192.png'

const Header = () => {
  return (
    <header className='header'>
      {/*Testing*/}
        {/* replace logo */}
        <img src={logo}/>
        <h1>Quiz Name</h1>
    </header>
  )
}

export default Header