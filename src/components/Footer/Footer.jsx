import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';
import { 
  FiTwitter, 
  FiGithub, 
  FiLinkedin,
  FiFacebook,
  FiYoutube,
  FiInstagram
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="logo">
        <div className="initial">
          <span>T</span>
          <div className="dot"></div>
        </div>
        <span>Nyariki</span>
      </div>
      <div className="social">
        <Link to="/" className='social-item'>
          <FiGithub className='icon'/>
        </Link>
        <Link to="/" className='social-item'>
          <FiLinkedin className='icon'/>
        </Link>
        <Link to="/" className='social-item'>
          <FiTwitter className='icon'/>
        </Link>
        <Link to="/" className='social-item'>
          <FiFacebook className='icon'/>
        </Link>
        <Link to="/" className='social-item'>
          <FiYoutube className='icon'/>
        </Link>
        <Link to="/" className='social-item'>
          <FiInstagram className='icon'/>
        </Link>
      </div>
      <span>Nyariki @ 2023 all rights reserved</span>
    </div>
  )
}

export default Footer