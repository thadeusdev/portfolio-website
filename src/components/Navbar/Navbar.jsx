import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="logo">
          <span>T</span>
          <div className="dot"></div>
        </div>
        <span>Nyariki</span>
      </div>
      <div className="links">
        <Link to='/' className='link'>
          <span>home</span>
        </Link>
        <Link to='/services' className='link'>
          <span>services</span>
        </Link>
        <Link to='/portfolio' className='link'>
          <span>portfolio</span>
        </Link>
        <Link to='/resume' className='link'>
          <span>resume</span>
        </Link>
        <Link to='/contact' className='link'>
          <span>contact</span>
        </Link>
      </div>
      <div className="button">
        download cv
      </div>
    </div>
  )
}

export default Navbar