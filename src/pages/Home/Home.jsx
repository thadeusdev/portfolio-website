import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';
import { 
  FiTwitter, 
  FiGithub, 
  FiLinkedin,
  FiFacebook,
  FiYoutube,
  FiInstagram
} from "react-icons/fi";

const Home = () => {
  return (
    <div className='home'>
      <div className="left">
        <div className="intro">
          <h3>Hello, <span>I'm</span></h3>
          <h2>Thadeus Nyariki</h2>
          <span>Full Stack Software Developer</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, laborum doloremque mollitia sunt praesentium itaque possimus quisquam eveniet dolorem, autem hic nemo, quasi consequuntur tempore ea vero incidunt accusamus doloribus omnis sint placeat! Nam tempora asperiores magni quos, rerum harum!
        </p>
        <div className="social">
          <h3>find me on</h3>
          <div className="social-items">
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
        </div>
        <div className="featured">
          <div className="featured-item">
            <h3>2+</h3>
            <span>year of experience</span>
          </div>
          <div className="featured-item">
            <h3>700+</h3>
            <span>global working client</span>
          </div>
          <div className="featured-item">
            <h3>30+</h3>
            <span>awards win</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="frame"></div>
        <img src={require('../../assets/hero.png')} alt="" />
      </div>
    </div>
  )
}

export default Home